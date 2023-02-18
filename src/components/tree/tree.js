import React, {useState, useEffect, useCallback} from "react";
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { getTreeData } from "../../api/tree-api";

const Tree = () => {

    const [data, setData] = useState([])
    
        /*
    call API and set the response data in state 
    */
    const fetchTreeData = useCallback(async () =>{
        try{
            const result = await getTreeData();
            setData(result.data)
        }catch(error) {
            // handle error
        }
    },[])
    
    /*
    on component render call the fetchTreeData function
    */
    useEffect(()=>{
        fetchTreeData()
    },[fetchTreeData])
    


    /*
        1.Render TreeItem
        2.check if the key (children) is array if yes for each object render TreeItem
    */
    const renderNode = (nodes) =>(
    <TreeItem 
        key={nodes.id} 
        nodeId={nodes.id} 
        label={nodes.name}
        sx={{ ".css-1g86id8-MuiTreeItem-content .MuiTreeItem-label":{width: "auto !important"} }}
    >
        {
            Array.isArray(nodes.children)
            ? nodes.children.map((node) => renderNode(node))
            : null
        }
    </TreeItem>)

    const renderTree = (data) => data.map((node)=> renderNode(node))
    
    return (
        <TreeView
          aria-label="tree"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={['1','4']}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ height: 500, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
          {renderTree(data)}
        </TreeView>
    );
}

export default Tree;