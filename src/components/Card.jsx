const ItemList = ({ items, category }) => {
    return (
      <div>
        <h2>{category}</h2>
        <ul>
          {items
            .filter(item => item.category === category)
            .map(filteredItem => (
              <li key={filteredItem.id}><i class={"devicon-" + filteredItem.class}></i></li>
            ))}
        </ul>
      </div>
    );
  };

const Card = () =>{
    const iconLanguage = [
        {id:15, class:'html5-plain', category:'FE', name:'HTML5'},
        {id:16, class:'css3-plain', category:'FE', name:'CSS'},
        {id:17, class:'javascript-plain', category:'FE', name:'JavaScript'},
        {id:18, class:'nodejs-plain', category:'BE', name:'NodeJS'},
        {id:19, class:'php-plain', category:'BE', name:'PHP'},
        {id:20, class:'mysql-original', category:'DB', name:'MySQL'},
        {id:21, class:'python-plain', category:'FE', name:'Python'},
        {id:22, class:'python-plain', category:'BE', name:'Python'},
        {id:23, class:'react-original', category:'FE', name:'React'},
        {id:24, class:'canva-original', category:'Design', name:'Canva'},
        {id:25, class:'github-original', category:'Collab', name:'Github'},
        {id:26, class:'tailwindcss-original', category:'FE', name:'TailwindCSS'},
        {id:27, class:'bootstrap-plain', category:'FE', name:'Bootstrap'}
    ]
    return(
        <>
         <div>
            <h1>Items List</h1>
            <ItemList items={iconLanguage} category="BE" />
            <ItemList items={iconLanguage} category="FE" />
            <ItemList items={iconLanguage} category="Design" />
            <ItemList items={iconLanguage} category="DB" />
            <ItemList items={iconLanguage} category="Collab" />
        </div>
        </>
    )
}

export default Card;