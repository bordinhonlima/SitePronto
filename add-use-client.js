const fs = require('fs');
const path = require('path');

const addUseClient = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.startsWith("'use client'")) {
    const newContent = "'use client';\n\n" + content;
    fs.writeFileSync(filePath, newContent);
    console.log(`Added 'use client' to ${filePath}`);
  }
};

const processDirectory = (directory) => {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('useState') || content.includes('useEffect')) {
        addUseClient(filePath);
      }
    }
  });
};

processDirectory('./app'); 