const initialState = {
  location: [],
  vehicletype: [],
  vehicle: [],
  locationUpdate: false,
  vehicletypeUpdate: false,
  vehicleUpdate: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDLOCATION':
      return {
        ...state,
        locationUpdate: !state.locationUpdate,
      };
    case 'GETLOCATIONS':
      return {
        ...state,
        location: action.payload,
      };
    case 'ADDVEHICLETYPE':
      return {
        ...state,
        vehicletypeUpdate: !state.vehicletypeUpdate,
      };
    case 'GETVEHICLETYPE':
      return {
        ...state,
        vehicletype: action.payload,
      };
    case 'ADDVEHICLE':
      return {
        ...state,
        vehicleUpdate: !state.vehicleUpdate,
      };
    case 'GETVEHICLE':
      return {
        ...state,
        vehicle: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
