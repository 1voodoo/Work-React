import axios from "axios";

const updeitProfile = async(data) => {
  const response = await axios.put('/api/profile', data);
 
  return response.data;
 
 };
 
 export default updeitProfile;