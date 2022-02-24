import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getPlaces } from "../../store/Place/ActionCreators";
const COLUMNS: GridColDef[] = [
  {field: 'address', headerName: 'Address'},
  {field: 'type', headerName: 'Capacity'},
  {field: 'capacity', headerName: 'Capacity'},
  {field: 'createdAt', headerName: 'Created At'},
];

const Home:FC = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.places);
  

  useEffect (() => {
    dispatch(getPlaces())
  }, []);
  
  const rows = items?.map((place) => {

    return {
      id: place.id,
      address: '',
      type: '',
      capacity: '',
      createdAt: '',
    };
  });
  return (
    <div style={{height: 500}}>
      <DataGrid
        rows={rows || []}
        columns= {COLUMNS}
      />
    </div>
  );
};

export default Home;
