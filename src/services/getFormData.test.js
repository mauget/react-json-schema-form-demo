import getFormData from './getFormData';

describe('getFormData', () => {
   it('shuld return form data',()=>{
      const formData = getFormData();
      expect(formData.firstName).toEqual('Skyler');
   });
});
