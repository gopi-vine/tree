import React, {useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Container, Title, InnerTitle, FileName} from './style'

const Folder = ({name, children}) => {
    
    const [isOpen, setIsopen] = useState( false)

    const handleClick = () => {
        setIsopen(!isOpen)
    }

    return(
        <Title>
            <InnerTitle onClick={handleClick}> {isOpen ? <ExpandMoreIcon/> : <ChevronRightIcon/>} {name}</InnerTitle>
            {isOpen && children}
        </Title>
    )
}

const File = ({name}) => {
    return <FileName>{name}</FileName>
}

const TreeNode = ({node}) => {
    if(node.children){
        return(
            <Folder key={node.id} name={node.name} >
                {
                    node.children.map(childNode => (
                        <TreeNode key = {childNode.id} node={childNode} />
                    ))
                }
            </Folder>
        )
    }else{
        return <File name={node.name}/>
    }
}

const TreeDemo = (props) => {
    return (
        <Container>
            {
                Array.isArray(props.data) ? props.data.map((node)=>(
                    <TreeNode key={node.id} node={node} defaultExpanded = {props.defaultExpanded}></TreeNode>
                )) : null
            }
        </Container>
    )
}

export default TreeDemo;