import './searchMenu.css'
import { Download, Search } from '@mui/icons-material';

const SearchMenu = () => {
    
  return (
    <>
    <div className='searchMenu'>
        <div className='search'>
            <div className='localsearch'>
                <Search />
                <input type="text" placeholder="Search"/>
            </div>
            <a href=" ">Search</a>
        </div>
        <div className='items'>
            <div className="item drop">
                <select /*onChange = {updatedFilterData}*/ >
                    <option value="all">All Organisations</option>
                    <option value="amazon">Amazon</option> 
                    <option value="flipkart">Flipkart</option> 
                    <option value="myntra">Myntra</option>
                    <option value="paytm">Paytm</option> 
                </select>
            </div>
            <div className="item drop">
                <select /*onChange = {updatedFilterData}*/ >
                    <option value="firstw">Dec 25,2021 - Jan 5,2022</option>
                    <option value="secondw">Dec 15,2021 - Dec 24,2021</option> 
                    <option value="thirdw">Dec 5,2021 - Dec 14,2021</option> 
                    <option value="fourthw">Nov 25,2021 - Dec 4,2021</option>
                    <option value="fifthw">Nov 15,2021 - Nov 24,2021</option> 
                </select>
            </div>
            <div>
                <a href=" " className="item advsearch" >
                    <Search />
                    Advanced Search
                </a>
            </div>
            <div>
                <a href=" " className="item download">
                    <Download />
                    Download
                </a>
            </div>
        </div>
    </div>
    </>
  )
}
export default SearchMenu;