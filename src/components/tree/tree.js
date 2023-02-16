import React from "react";
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

const treeData = [
    {
        id: '1',
        name: 'Folder 1',
        children:[
            {
                id: '3',
                name: 'Subfolder 1',
                children: [
                    {
                        id: '9',
                        name: "File 1"
                    },
                    {
                        id: '10',
                        name: "File 2"
                    },
                    {
                        id: '11',
                        name: "File 3"
                    },
                    {
                        id: '12',
                        name: "File 4"
                    }
                ]
            },
            {
                id: '4',
                name: 'Subfolder 2 ',
                children: [
                    {
                        id: '13',
                        name: "File 1"
                    },
                    {
                        id: '14',
                        name: "File 2"
                    },
                    {
                        id: '15',
                        name: "File 3"
                    },
                    {
                        id: '16',
                        name: "File 4"
                    }
                ]
            },
            {
                id: '5',
                name: 'Subfolder 3 ',
                children: [
                    {
                        id: '17',
                        name: "File 1"
                    },
                    {
                        id: '18',
                        name: "File 2"
                    },
                    {
                        id: '19',
                        name: "File 3"
                    },
                    {
                        id: '20',
                        name: "File 4"
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        name: 'Folder 2',
        children:[
            {
                id: '6',
                name: 'Subfolder 1',
                children: [
                    {
                        id: '21',
                        name: "File 1"
                    },
                    {
                        id: '22',
                        name: "File 2"
                    },
                    {
                        id: '23',
                        name: "File 3"
                    },
                    {
                        id: '24',
                        name: "File 4"
                    }
                ]
            },
            {
                id: '7',
                name: 'Subfolder 2 ',
                children: [
                    {
                        id: '25',
                        name: "File 1"
                    },
                    {
                        id: '26',
                        name: "File 2"
                    },
                    {
                        id: '27',
                        name: "File 3"
                    },
                    {
                        id: '28',
                        name: "File 4"
                    }
                ]
            },
            {
                id: '8',
                name: 'Subfolder 3 ',
                children: [
                    {
                        id: '29',
                        name: "File 1"
                    },
                    {
                        id: '30',
                        name: "File 2"
                    },
                    {
                        id:'31',
                        name: "File 3"
                    },
                    {
                        id: '32',
                        name: "File 4"
                    }
                ]
            }
        ]
    }
]



const Tree = () => {

    /*
        1.Render TreeItem
        2.check if the key (children) is array if yes for each object render TreeItem
    */
    const renderNode = (nodes) =>(
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
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
          {renderTree(treeData)}
        </TreeView>
    );
}

export default Tree;