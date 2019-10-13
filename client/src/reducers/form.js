export const initialState = {
  status: null,
  age: null,
  salaire: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case "setSalary":
      return { ...state, salary: action.salary };
    case "setStatus":
      return { ...state, status: action.status };
    case "setAge":
      return { ...state, status: action.age };
    default:
      throw new Error();
  }
}
