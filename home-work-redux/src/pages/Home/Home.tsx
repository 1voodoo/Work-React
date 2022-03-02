import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getAllCoctails } from "../../store/info";
import style from './Home.module.scss'

const COLUMNS: GridColDef[] = [
  { field: 'strDrink', headerName: 'Название', flex: 0.15},
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