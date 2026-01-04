import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RecordItem = {
  id: string;
  durationMs: number;
  createdAt: number;
};

type RecordState = {
  records: RecordItem[];
};

const initialState: RecordState = {
  records: [],
};

export const RecordReducer = createSlice({
  name: "Record",
  initialState,
  reducers: {
    addRecord: (state, action: PayloadAction<RecordItem>) => {
      state.records.unshift(action.payload);
    },
    clearRecords: () => initialState,
  },
});

export const { addRecord, clearRecords } = RecordReducer.actions;
export default RecordReducer.reducer;
