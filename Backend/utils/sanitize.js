export const sanitizeMongooseObject = (obj) => {
  if (!obj) return obj;
  
  // Convert to plain object if it's a Mongoose document
  const plainObj = obj.toObject ? obj.toObject() : obj;
  
  // Remove internal properties
  const { __v, $__, _doc, $isNew, ...cleanObj } = plainObj;
  
  // Recursively clean nested objects
  Object.keys(cleanObj).forEach(key => {
    if (typeof cleanObj[key] === 'object') {
      cleanObj[key] = sanitizeMongooseObject(cleanObj[key]);
    }
  });
  
  return cleanObj;
};