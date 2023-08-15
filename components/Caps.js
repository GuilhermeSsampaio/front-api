import React from 'react';
import EditorJSHTML from 'editorjs-html';
import Cards from './cards';

function Caps({ lista }) {
  function convertToHTML(data) {
    let htmlContent = ''; // Variável para armazenar o conteúdo HTML

    data.blocks.forEach((block) => {
      switch (block.type) {
        // ... outros casos

        case 'image':
          // Use a URL do Cloudinary fornecida no bloco de dados
          const imageSrc = block.data.file.url;
          const imageCaption = block.data.caption;

          // Crie o elemento de imagem com a URL do Cloudinary
          htmlContent += `<img src="${imageSrc}" alt="${imageCaption}" />`;
          htmlContent += `<p>${imageCaption}</p>`;
          break;

        case 'embed':
          // Use a URL do Cloudinary fornecida no bloco de dados
          const videoSrc = block.data.source;
          const videoCaption = block.data.caption;

          // Crie o elemento de vídeo usando a URL do Cloudinary
          htmlContent += `<iframe width="560" height="315" src="${videoSrc}" frameborder="0" allowfullscreen></iframe>`;
          htmlContent += `<p>${videoCaption}</p>`;
          break;

        // ... outros casos
      }
    });

    return htmlContent;
  }

  return (
    <div>
      <h1>Capítulos</h1>
      {lista.map(cap => (
        <div key={cap.id}>
          {/* Converta os dados da descrição para HTML usando a função convertToHTML */}
          <div dangerouslySetInnerHTML={{ __html: convertToHTML(JSON.parse(cap.attributes.description)) }} />
          <Cards/>
        </div>
      ))}
    </div>
  );
}

export default Caps;
