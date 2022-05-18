import React from 'react';
import { StyleSheetManager } from 'styled-components';
import style from './Team.module.css';


function Team() {
  return (
    <div className={style.team}>
        <div className = {style.team_title_container} >
            <div className = {style.team_title} >
                TEAM
            </div>
           
        </div>


        <div className = {style.team_member_block}>

            <div className = {style.leadership_title}>
                LEADERSHIP
            </div>

        <div className = {style.member_item} >
            <div className = {style.member_name}>
            Andrew Chadeayne
            </div>

            <div className = {style.member_role}>
            Founder & CEO
            </div>
            <div className = {style.member_info}>
            Dr. Andrew Chadeayne is the Founder and CEO of CaaMTech. Prior to founding CaaMTech, Andrew served as Chief Innovations Officer at ebbu, Inc. where he managed all aspects of the company’s patent strategy leading up to its sale to Canopy Growth Corporation in 2018. Over the past 20 years, Andrew has worked in virtually every area of chemical innovation, including Director of Intellectual Property for NewMarket Pharmaceuticals; patent agent at Finnegan, Henderson, Farabow, Garrett & Dunner, LLP; inventor at SwimSpray, LLC; and managing member of Chadeayne LLC, a patent prosecution firm. Andrew earned a BA in Chemistry from Princeton, a PhD in Chemistry from Cornell, and a JD from the George Washington University Law School.
            </div>
        </div>

        <div className = {style.member_item} >
            <div className = {style.member_name}>
            Andrew Chadeayne
            </div>

            <div className = {style.member_role}>
            Founder & CEO
            </div>
            <div className = {style.member_info}>
            Dr. Andrew Chadeayne is the Founder and CEO of CaaMTech. Prior to founding CaaMTech, Andrew served as Chief Innovations Officer at ebbu, Inc. where he managed all aspects of the company’s patent strategy leading up to its sale to Canopy Growth Corporation in 2018. Over the past 20 years, Andrew has worked in virtually every area of chemical innovation, including Director of Intellectual Property for NewMarket Pharmaceuticals; patent agent at Finnegan, Henderson, Farabow, Garrett & Dunner, LLP; inventor at SwimSpray, LLC; and managing member of Chadeayne LLC, a patent prosecution firm. Andrew earned a BA in Chemistry from Princeton, a PhD in Chemistry from Cornell, and a JD from the George Washington University Law School.
            </div>
        </div>

        <div className = {style.member_item} >
            <div className = {style.member_name}>
            Andrew Chadeayne
            </div>

            <div className = {style.member_role}>
            Founder & CEO
            </div>
            <div className = {style.member_info}>
            Dr. Andrew Chadeayne is the Founder and CEO of CaaMTech. Prior to founding CaaMTech, Andrew served as Chief Innovations Officer at ebbu, Inc. where he managed all aspects of the company’s patent strategy leading up to its sale to Canopy Growth Corporation in 2018. Over the past 20 years, Andrew has worked in virtually every area of chemical innovation, including Director of Intellectual Property for NewMarket Pharmaceuticals; patent agent at Finnegan, Henderson, Farabow, Garrett & Dunner, LLP; inventor at SwimSpray, LLC; and managing member of Chadeayne LLC, a patent prosecution firm. Andrew earned a BA in Chemistry from Princeton, a PhD in Chemistry from Cornell, and a JD from the George Washington University Law School.
            </div>
        </div>

        </div>
    </div>
    );
}

export default Team;