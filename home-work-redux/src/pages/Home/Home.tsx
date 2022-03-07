import { Stack, Avatar } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getAllCoctails } from "../../store/info";
import style from './Home.module.scss'

const COLUMNS: GridColDef[] = [
  { field: 'strDrink', headerName: 'Название', flex: 0.10},
  { field: 'strCategory', headerName: 'Категория', flex: 0.15},
  { field: 'strAlcoholic', headerName: 'Алкогольный', flex: 0.15},
  { field: 'strInstructions', headerName: 'Способ приготовления',flex: 1},
  { field: 'strDrinkThumb', headerName: 'Фото', flex: 0.15},
];

const Home:FC = () => {
  const dispatch = useDispatch()
  const { coctails } = useSelector((state: RootState) => state.allCoctails);
  
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

  return (
    <div className={style.wrapper}>
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Stack>
      <h1>Drinks menu</h1>
      <div style={{height: 500}}>
        <DataGrid 
          loading= {!rows}
          rows={rows || []}
          columns={COLUMNS}
          pageSize={7}
          isRowSelectable={() => false}
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