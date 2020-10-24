import React,{useState, useEffect, forwardRef} from 'react';
import MaterialTable, { Column, Icons } from "material-table";
import {Grid, Typography} from "@material-ui/core"
import {
    ArchiveOutlined,
    Add,
    Check,
    Clear,
    ChevronRight,
    SaveAlt,
    FilterList,
    FirstPage,
    LastPage,
    ChevronLeft,
    Search,
    ArrowUpward,
    Remove,
    ViewColumn,
    EditOutlined,
  } from "@material-ui/icons";
  
  import DetailResults from "./detailResults"
interface results {
    results : any;
}
export interface Row {
    performedDate: string;
    typeOfTest: string;
    application: string;
    data: Object;
}
const ShowResults = (props : results)=>{
    const [title, setTitle] = useState("")
    const [results, setResults] = useState([]);
    const [emptyTable, setEmptyTable] = useState(false);
    
    useEffect(()=>{
        if(props.results.length > 0){
            setTitle(`Number of test executed ${props.results.length}`);
            setResults(props.results);
        }
        else{
            setTitle("Please execute a test");
            setEmptyTable(true);
        }
        
    },[props.results])
    const columns : Array<Column<Row>> = [
        {
            title:"Date",
            field:"performedDate"
        },
        {
            title:"Type of test",
            field:"typeOfTest"
        },
        {
            title:"Tested App",
            field:"application"
        }

    ] 
    return( 

        <Grid container justify="center" style={{marginTop:"5%"}}>
            <Typography variant="h4">{title}</Typography>
            <Grid item xs={12} style={{marginTop:"2%"}}>
            
            <MaterialTable
            isLoading={results.length === 0 && !emptyTable}
            title=""
            icons={MaterialTableIcons}
            columns={columns}
            data={results}
            options={{ pageSize: 5, pageSizeOptions: [5, 10, 20] }}
            detailPanel = {
              (rowData : Row) => <DetailResults row={rowData}/>
            }
            />
            
            
            </Grid>
        </Grid>
    )
}

const MaterialTableIcons: Icons = {
    Add: forwardRef((props, ref) => <Add {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <ArchiveOutlined {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <EditOutlined {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };
  

export default ShowResults;