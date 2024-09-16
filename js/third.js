const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
     <h1>My dynamic section</h1>
     <p>Extra text addad insde paragraph</p>
     <ul>
          <li>first itme</li>
          <li>first itme</li>
          <li>first itme</li>
          <li>first itme</li>
     </ul>
`

main.appendChild(section);