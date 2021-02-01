import { user_input_type } from "../redux/types/types"

/**
 * takes object { user_name: string; passwords: string[ ] } and returns an array of indexes of empty fields or false
 * @param data 
 */
export const check_empty_fields = (data: user_input_type): number[] | boolean => result(data).length ? result(data) : false

const result = (data: user_input_type): number[] => Object.values(data)
    .map((item?: string, index?: number) => !!item!.trim().length ? 0 : index! + 1)
    .filter((e: number): boolean => e !== 0)