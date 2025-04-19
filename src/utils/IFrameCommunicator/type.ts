// 发送or监听消息的type，这个enum表明既可以给iframe发送这个type类型的数据，也可以接受iframe发送过来的这个type的数据
export enum CommunicateType {
  order = 'sectionConfigData.order', // sectionConfigData.order改变
  sections = 'sectionConfigData.sections', // sectionConfigData.sections发生了改变
  section = 'sectionConfigData.sections[sectionId]', // 某个section发生了改变
  sectionConfigData = 'sectionConfigData', // 整个sectionConfigData发生了改变
  sectionSchemaLanguage = 'on:sectionLanguageChange', // 监听section schema多语言语料的消息
  allSectionSchemaChange = 'on:allSectionSchemaChange', // section schema改变
  currentEditingForm = 'currentEditingForm', // 当前正在编辑的section或者block发生了改变
  language = 'language', // 语言发生了改变
}
