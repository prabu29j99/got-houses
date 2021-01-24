import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';
import Search from './components/Search';
const App= ()=> {
  const [items,setItems] = useState([]);
  const [isLoading,setLoading] = useState(true);
  const [query,setQuery]=useState('');
  useEffect(()=>{
    const fetchItems = async() =>{
      const result = await axios(`https://api.got.show/api/show/houses`);
      console.log(result.data);
      const filtered_data = result.data.filter((house)=>{
        return house.hasOwnProperty('logoURL');
      });
      setItems(filtered_data);
      setLoading(false);
    }
    fetchItems();
  },[])
  

  const dynamicSearch = () =>{
    return items.filter(item=> item.name.toLowerCase().includes(query.toLowerCase()));
  }

  return (
    <div className="container">
      <Header />
      <Search getQuery = {(q)=>setQuery(q)}/>
      <Grid isLoading={isLoading} items={dynamicSearch()} />
    </div>
  );
}

export default App;
