import React from "react";

import {Link} from 'react-router-dom';

const SideNav = ()=> {
    return (
        <div>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                <span className="brand-text font-weight-light">AG SOCCER</span>
            </a>

            {/* Sidebar */}
            <div className="sidebar">
                {/* SidebarSearch Form */}
                <div className="form-inline">
                <div className="input-group" data-widget="sidebar-search">
                    <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                    <button className="btn btn-sidebar">
                        <i className="fas fa-search fa-fw" />
                    </button>
                    </div>
                </div>
                </div>
                
                {/* Sidebar Menu - Football Championship*/}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
                        with font-awesome or any other icon font library */}
                        <li className="nav-header">CAMPEONATOS DE FUTEBOL</li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <i className="nav-icon far fa-circle text-warning" />
                                <a href="http://localhost:3000/highlightsChampionship" target="main-iframe">Highlights - Liga Estrangeira</a>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon far fa-circle text-warning" />
                                <a href="http://localhost:3000/brazilianChampionship" target="main-iframe">Campeonato Brasileiro</a>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <i className="nav-icon far fa-circle text-warning" />
                                <a href="http://localhost:3000/scoreChampionship" target="main-iframe">Tabela</a>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon far fa-circle text-warning" />
                                <a href="http://localhost:3000/footballersBrazilCup" target="main-iframe">Artilharia da Copa Brasil</a>
                            </a>
                        </li>
                        <li className="nav-header">Account</li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <i className="nav-icon far fa-circle text-warning" />
                                <a href="http://localhost:3000/myAccount" target="main-iframe">My Account</a>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>


            {/* /.sidebar */}
            </aside>
        </div>
    );
}

export default SideNav;