const ItemList = ({ items, category }) => {
    return (
      <div className="Card-container">
            <h2>{category}</h2>
            <div className="Card-isi">
                {items
                    .filter(item => item.category === category)
                    .map(filteredItem => (
                    <div key={filteredItem.id} className="Card">
                        <i className={"devicon-" + filteredItem.class}></i>
                        <p>{filteredItem.name}</p>
                    </div>
                    ))}
            </div>
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
        {id:21, class:'python-plain', category:'Misc', name:'Python'},
        {id:22, class:'react-original', category:'FE', name:'React'},
        {id:23, class:'canva-original', category:'Design', name:'Canva'},
        {id:24, class:'github-original', category:'Collab', name:'Github'},
        {id:25, class:'tailwindcss-original', category:'FE', name:'Tailwind'},
        {id:26, class:'bootstrap-plain', category:'FE', name:'Bootstrap'}
    ]
    return(
        <>
         <div className="Card-base">
            <ItemList items={iconLanguage} category="FE" />
            <ItemList items={iconLanguage} category="BE" />
            <ItemList items={iconLanguage} category="Design" />
            <ItemList items={iconLanguage} category="DB" />
            <ItemList items={iconLanguage} category="Collab" />
            <ItemList items={iconLanguage} category="Misc" />
        </div>
        </>
    )
}

export default Card;