import React from 'react';
import axios from 'axios'
import { useQuery } from 'react-query'
import FilterPanel from '../components/FilterPanel'
import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar'
import List from '../components/List';
import "./pages.css"


function Trending() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [from, setFrom] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [pageNumber,setPageNumber]=useState(1)
  const [list,setList]=useState([])
  const [to,setTo]=useState(null)
  
  useEffect(() => {
    applyFilters();
  }, [selectedCategory,selectedRating,searchInput,to,from]);

  
  const fetchmovies = async (pageNumber) => {
    const akshat= await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=ccfc28c804e82cb885f0954a2f7854e8&page=${pageNumber}`)
    setList(akshat.data.results)
  }
const applyFilters = () => {
  if (list.length>0) {
    
  var updatedList = list

  console.log(updatedList)
  // Rating Filter
  if (selectedRating) {
    updatedList = updatedList.filter(
      (item) => Math.trunc(item.vote_average/2) === parseInt(selectedRating)
    );
  }

  // Category Filter
  if (selectedCategory) {
    updatedList = updatedList.filter(
      (item) => item.media_type === selectedCategory
    );
  }
  // Search Filter
  if (searchInput) {
    updatedList = updatedList.filter(
      (item) =>{
        if (item.media_type==="movie"){
            return (item.title.toLowerCase().includes(searchInput.toLowerCase()))
        }
        else {
          return (item.original_name.toLowerCase().includes(searchInput.toLowerCase()))
        }
      })
  }
  // Price Filter
  // const dateprev = from;
  // const datenext = to;
  if(from && to) {
  //  if((updatedList[0].release_date.substring(0, 4)) >= to){
    //    alert("good job akshat")
//    }
   updatedList = updatedList.filter(
   (item) => {
  if(item.media_type==='movie') {
      return ((parseInt(item.release_date.substring(0, 4)) >= from) && (parseInt(item.release_date.substring(0, 4)) <= to))
 }
  else {
    return ((parseInt(item.first_air_date.substring(0, 4)) >= from) && (parseInt(item.first_air_date.substring(0, 4)) <= to))
  }
})  
  }
  // if item 
// console.log(updatedList[0].release_date.substring(0, 4))
setList(updatedList);
  }
};


  const {isLoading} = useQuery(['toprated-movies', pageNumber] ,() => fetchmovies(pageNumber) , { keepPreviousData: true,})
  

  const handleSelectCategory = (event, value) => 
  !value ? null : setSelectedCategory(value)  
  

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);
    

  const handlefrom = (event) => 
  setFrom(event.target.value) 
  
  
  const handleto = (event) => {
  setTo(event.target.value)
  console.log(to) 
  }
    if(isLoading) {
      return <h2> Loading ... </h2>
  }
 // let updatedList=data.data.results
  
  return <div> 
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
        />
      <div className='home_panelList-wrap'>
        <div className='home_list-wrap'>
           <List list={list} />
        </div>
        <div className='home_panel-wrap'>
          <FilterPanel
            selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
            selectedRating={selectedRating}
            selectRating={handleSelectRating}
            from={from}
            handlefrom={handlefrom}
            to={to}
            handleto={handleto}
            />
        </div>
        </div>
        <div className="pagination">
        <button className='prev' onClick = { () => setPageNumber((page) => page-1)} disabled = {pageNumber===1} >
          Prev Page
        </button>
        <h3 className='number'> Page Number : {pageNumber} </h3>
        <button className='next' onClick = { () => setPageNumber((page) => page+1)} disabled = {pageNumber===10} >
          Next Page
        </button>
        </div>
  </div>;
}

export default Trending;
