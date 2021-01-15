import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket} , dispatch] = useStateValue();


    return (
        <div className="header">
            <Link to="/">
                 <img className="header__logo"
                     src="https://blog.flamingtext.com/blog/2020/10/18/flamingtext_com_1603017087_825463480.png" 
                 />
            </Link>
        

            <div className="header__search">
                <input className="header__searchInput"
                 type="text"/>
                 <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login">
                <div className="header__option">
                  <span className="option__lineone">Hello guest</span>
                  <span className="option__linetwo">Sign In</span>
                </div>
                </Link>
                

                <div className="header__option">
                    <span className="option__lineone">Returns</span>
                    <span className="option__linetwo">& orders</span>
                </div>

                <div className="header__option">
                    <span className="option__lineone">Your</span>
                    <span className="option__linetwo">matrix</span>
                </div>
                <Link to="/checkout">
                <div className="header__optionBucket">
                    <LocalMallIcon />
                      <span className="option__linetwo header__bucketCount">{basket.length}</span>
                 </div>
                </Link>

            </div>
            
        </div>
    )
}

export default Header
