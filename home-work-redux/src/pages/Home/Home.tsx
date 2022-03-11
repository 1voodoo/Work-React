import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../store";
import { getAllCoctails } from "../../store/info";
import style from './Home.module.scss'

function foto(params:string) {
  return (<img className={style.foto} src={params} alt='foto'/>)
}

const COLUMNS: GridColDef[] = [
  { field: 'strDrinkThumb', headerName: 'Фото', flex: 0.10, renderCell: (params) => foto(params.value)},
  { field: 'strDrink', headerName: 'Название', flex: 0.10},
  { field: 'strCategory', headerName: 'Категория', flex: 0.15},
  { field: 'strAlcoholic', headerName: 'Алкогольный', flex: 0.15},
  { field: 'strInstructions', headerName: 'Способ приготовления',flex: 1},

];

const Home:FC = () => {
  const dispatch = useDispatch();
  const { coctails } = useSelector((state: RootState) => state.allCoctails);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCoctails());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

 
  
  const rows = coctails?.map((info) => {
    
    return {
      id: info.idDrink,
      strDrink: info.strDrink,
      strCategory: info.strCategory,
      strAlcoholic: info.strAlcoholic,
      strInstructions: info.strInstructions,
      strDrinkThumb: info.strDrinkThumb
    };
  });
  const openMenu = (idDrink: string) => {
    navigate(`/menu/${idDrink}`)
  }

  return (
    <div className={style.wrapper}>
      <h1>Drinks menu</h1>
      <div style={{height: 500}}>
        <DataGrid 
          loading= {!rows}
          rows={rows || []}
          columns={COLUMNS}
          pageSize={7}
          isRowSelectable={() => false}
          onRowClick={(params) => openMenu(params.id.toString())}
          sx={{
            boxShadow: 2,
            border: 2,
            backgroundColor: 'white',
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />
      </div>   
    </div>
  );
};

export default Home;