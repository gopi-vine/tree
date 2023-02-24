import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

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
    </TreeItem>
)
        
const renderTree = (data) => data.map((node)=> renderNode(node))

const MaterialUiTree = (props) => {
    return(
        <TreeView
            aria-label="tree"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpanded={['1','4']}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 500, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >
            {renderTree(props.data)}
        </TreeView>
    )
}
export default MaterialUiTree;