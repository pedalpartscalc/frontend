export interface ValidatorResult {
  [validatorName: string]: {[key:string]:any} & {
    error: boolean;
    message?: string;
  };
  }
  
  export type ValidatorFn = (value: any) => ValidatorResult;
  
  function required(value: any): ValidatorResult {
    if (value === '' || value == null) {
      return { required: { error: true, message: 'Field is required' } };
    }
    return { required: { error: false } };
  }

  function minLength(number) {
    return function (value): ValidatorResult {
      if (value == null || value.length < number) {
        return {
          minLength: {
            error: true,
            value: number, 
            message: `Field minimum length is ${number}`,
          },
        };
      }
      return { minLength: { error: false } };
    };
  }
  
  export const Validators = {
    required,
    minLength
  };
  