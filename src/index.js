import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Image from './components/Image';
import Title from './components/Title';
import Ingridients from './components/Ingridients';
import Description from './components/Description';


const root = ReactDOM.createRoot(document.getElementById('root'));

let products = [{
  
  name: 'Сочная буженина в фольге',
  image: '/img/1.jpg',
  title: 'Продукты (на 4 порции)',
  ingridients: [
    'Свинина (лопатка) - 400-500 г',
    'Морковь (небольшая) - 1 шт. ',
    'Чеснок - 3 зубка',
    'Соль - 1 ч. ложка (по вкусу)',
    'Приправа для шашлыка - по вкусу'
  ],
  description: 'Сначала мясо шпигуется чесноком и натирается специями, маринуется в контейнере не менее 12 часов. Затем запекается, а после отлёживается в холодильнике ещё сутки. При соблюдении этих правил буженина получается очень нежной, но плотной, при нарезке не ломается и не крошится.'
},

{name: 'Овощи на гриле',
  image: '/img/2.jpg',
  title: 'Продукты (на 4 порции)',
  ingridients: [
    'баклажаны',
    'сладкий перец ',
    'томаты',
    'патиссоны',
    'Приправа для шашлыка - по вкусу картофель'
  ],
  description: 'Затем овощи нужно порезать (хотя, при желании можно запечь их и целиком). Для нарезки лучше использовать деревянную доску, например, из тика. Такая доска выглядит красиво и эстетично, после запекания овощи можно выложить прямо на нее, что очень удобно на пикнике.'
}]


let product = products[0]

root.render(
  
<div className='wrapper'>
  <div className='mobail-screen'>
  <div class="dropdown">
	<button class="dropbtn">¯\_(ツ)_/¯</button>
	<div class="dropdown-content">
		<a href="#">Сочная буженина в фольге</a>
		<a href="#">Овощи на гриле</a>
	</div>
</div>

  {product.smile}
<Header text={product.name}/>
<Image image={product.image}/>
<Title title={product.title}/>
<Ingridients ingridients={product.ingridients}/>
<Description description={product.description}/>
</div>
</div>
);

