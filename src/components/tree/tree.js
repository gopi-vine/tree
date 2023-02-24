import React, {useState, useEffect} from "react";
import { getTreeData } from "../../api/tree-api";
import MaterialUiTree from "../materialUiTree/materialUiTree";
import TreeDemo from "../treeDemo/treeDemo";
import {Container, InnerContainer, TreeContainer, Heading, SubHeading} from './style'

const Tree = () => {

    const [data, setData] = useState([])
    
    /*
    on component render call the API and set the result in state
    */
    useEffect(()=>{
        getTreeData().then((result) => {
            setData(result.data)
        });
    },[])

    return (
        <Container>
            <Heading>Elsevier interview task</Heading>
            <InnerContainer>
                <TreeContainer>
                    <SubHeading>Material-UI library</SubHeading>
                    <MaterialUiTree data={data}/>
                </TreeContainer>
                <TreeContainer>
                    <SubHeading>Custom component</SubHeading>
                    <TreeDemo data={data}/>
                </TreeContainer>
            </InnerContainer>
        </Container>
    );
}

export default Tree;