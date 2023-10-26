import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

  return (
    <>
        {/* titulo         */}
        <h1>GifExpertApp</h1>
        {/* input */}
        <AddCategory setCategories ={ setCategories }/>

        {/* listado de gifts */}
                <ol>
            { categories.map( category => { 
                return <li key={ category }>{ category }</li>
                } ) 
            }
        </ol>
            {/* gift item */}
    </>
  )
}
