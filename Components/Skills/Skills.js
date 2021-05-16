import Skill from "./skill"
const Skills = ()=>{
    const data = [
        {name:"HTML5",imgURL:"http://www.oscarblancarteblog.com/wp-content/uploads/2016/11/html5-e1479600257146.png"},
        {name:"CSS3",imgURL:"https://lenguajecss.com/assets/logo.svg"},
        {name:"Bootstrap",imgURL:"https://avatars.githubusercontent.com/u/2918581?s=280&v=4"},
        {name:"ECMAScript 6",imgURL:"https://miro.medium.com/max/640/1*kCD_6R3UkMHkpS_YgFoU9w.jpeg"},
        {name:"Typescript",imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3LfC23p48aUZxgRUduLn-H8ayt5g64D7bOWNBaTkLU3Aaj4K61KvIklTCOw6mXQAwVM&usqp=CAU"},
        {name:"Angular",imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/480px-Angular_full_color_logo.svg.png"},
        {name:"React",imgURL:"https://res.cloudinary.com/codier/image/upload/v1530614273/jqxbwxmnrkjq0mxhnvjn.png"},
        {name:"Python",imgURL:"https://4.bp.blogspot.com/-NNF6wg11eKQ/V-BL3PRvsUI/AAAAAAAAGPw/AtqUtauHxJ4_N2KAuhb1_InjrglDy1L0wCPcB/s1600/Other-python-icon.png"},
        {name:"MongoDB",imgURL:"https://img.icons8.com/color/452/mongodb.png"},
        {name:"MySQL",imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftvwLkCS44OosnRrSx6ZgCpMFWY_WuFZ23zrY87yZQI9fIgSdOGdZSmg-KmluoXN7QCg&usqp=CAU"},
        {name:"Flask",imgURL:"https://blog.tiraquelibras.com/wp-content/uploads/2019/08/Flask.png"},
        {name:"Java",imgURL:"https://www.logo.wine/a/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.svg"}
        
    ]
    return (
        <div className="container ">
            <div className="row">
                {data.map( s =>(
                        <Skill key={s.name} name={s.name} imgURL={s.imgURL}></Skill>
                ))}
            </div>
        </div>
    )
  }

export default Skills 