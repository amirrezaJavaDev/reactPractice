import React from "react";
import Layout from "../../components/layout/Layout";
import {Slider} from "../../components/slider/Slider";
import Digi from "./../../digi.json";
export default function  Home(){
    return(
        <Layout>
            <Slider slides={Digi}/>
        </Layout>
    )
}