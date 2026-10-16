const sharp = require('sharp');
const fs = require('fs');
const https = require('https');

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      const data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
    }).on('error', reject);
  });
}

async function run() {
  const width = 640;
  const height = 480;
  const photoH = 410;

  const cards = [
    {
      name: 'Student.webp',
      url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=85',
      iconSvg: `
        <svg width="60" height="60" viewBox="0 0 24 24" fill="#145d9e">
          <circle cx="12" cy="6" r="3.2" />
          <path d="M4 19.5c0-.83.67-1.5 1.5-1.5H11v-7c0-.55-.45-1-1-1H5c-1.1 0-2 .9-2 2v9.5c0 .83.67 1.5 1.5 1.5H11v-2H5.5c-.28 0-.5-.22-.5-.5z"/>
          <path d="M20 19.5c0 .28-.22.5-.5.5H13v2h6.5c.83 0 1.5-.67 1.5-1.5V12c0-1.1-.9-2-2-2h-5c-.55 0-1 .45-1 1v7h5.5c.83 0 1.5.67 1.5 1.5z"/>
        </svg>
      `
    },
    {
      name: 'Digital-Reinforcement.webp',
      url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=85',
      iconSvg: `
        <svg width="60" height="60" viewBox="0 0 24 24" fill="#145d9e">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
        </svg>
      `
    },
    {
      name: 'Classroom-Integration.webp',
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=85',
      iconSvg: `
        <svg width="60" height="60" viewBox="0 0 24 24" fill="#145d9e">
          <circle cx="8" cy="5" r="2.5"/>
          <path d="M12 11H4c-1.1 0-2 .9-2 2v6h2v-6h1v6h2v-6h1v6h2v-6h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z"/>
          <path d="M13 3h8c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1zm1 2v4h6V5h-6z"/>
          <circle cx="16" cy="16" r="1.5"/>
          <circle cx="20" cy="16" r="1.5"/>
        </svg>
      `
    },
    {
      name: 'Measurable-Outcomes.webp',
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85',
      iconSvg: `
        <svg width="60" height="60" viewBox="0 0 24 24" fill="#145d9e">
          <path d="M12 4C7.03 4 3 8.03 3 13c0 2.22.81 4.25 2.15 5.82l1.45-1.45C5.59 16.14 5 14.64 5 13c0-3.87 3.13-7 7-7s7 3.13 7 7c0 1.64-.59 3.14-1.6 4.37l1.45 1.45C20.19 17.25 21 15.22 21 13c0-4.97-4.03-9-9-9zm-1 5v4.18c-.61.55-1 1.34-1 2.22 0 1.66 1.34 3 3 3s3-1.34 3-3c0-.88-.39-1.67-1-2.22V9h-4z"/>
        </svg>
      `
    }
  ];

  for (const c of cards) {
    console.log("Processing:", c.name);
    const photoBuf = await download(c.url);
    
    // Resize photo to fill top
    const resizedPhoto = await sharp(photoBuf)
      .resize(width, photoH, { fit: 'cover' })
      .toBuffer();

    // Circular badge SVG overlay at bottom center
    const badgeSize = 120;
    const badgeX = Math.round((width - badgeSize) / 2);
    const badgeY = height - badgeSize - 4;
    
    const overlaySvg = Buffer.from(`
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <!-- Bottom background strip to match app cyan #D5FBFD -->
        <path d="M 0 ${photoH - 20} Q ${width / 2} ${photoH + 20} ${width} ${photoH - 20} L ${width} ${height} L 0 ${height} Z" fill="#D5FBFD" />
        
        <!-- Circular badge -->
        <g transform="translate(${badgeX}, ${badgeY})">
          <circle cx="${badgeSize/2}" cy="${badgeSize/2}" r="${badgeSize/2 - 2}" fill="#C9F5F8" stroke="#ffffff" stroke-width="4" />
          <g transform="translate(${(badgeSize - 60)/2}, ${(badgeSize - 60)/2})">
            ${c.iconSvg}
          </g>
        </g>
      </svg>
    `);

    // Composite photo and overlay on base canvas
    const compositeImg = await sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 213, g: 251, b: 253, alpha: 1 } // #D5FBFD
      }
    })
    .composite([
      { input: resizedPhoto, top: 0, left: 0 },
      { input: overlaySvg, top: 0, left: 0 }
    ])
    .webp({ quality: 90 })
    .toBuffer();

    fs.writeFileSync(`src/assets/images/${c.name}`, compositeImg);
    if (!fs.existsSync('public/assets/images')) fs.mkdirSync('public/assets/images', { recursive: true });
    fs.writeFileSync(`public/assets/images/${c.name}`, compositeImg);
    fs.writeFileSync(`public/${c.name}`, compositeImg);
    console.log(`Saved ${c.name} (${compositeImg.length} bytes)`);
  }
}

run().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
