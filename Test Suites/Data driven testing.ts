<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Data driven testing</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>f409bcc9-3fae-40d4-bc60-81e99f01a5fe</testSuiteGuid>
   <testCaseLink>
      <guid>448f0d48-694f-4f58-b613-43fb21276d31</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/DDT1 - Current weather</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>3afb3774-54af-4907-974e-47dc4d51542f</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data cities</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>3afb3774-54af-4907-974e-47dc4d51542f</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>latitude</value>
         <variableId>a8436f28-c621-44ed-b1d0-d1b41b7360c4</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>3afb3774-54af-4907-974e-47dc4d51542f</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>longitude</value>
         <variableId>41a49153-7366-449f-9593-0e0ad378b0c2</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>f5cf7aef-a7fc-4c5d-90a6-0481fb13c6b9</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/DDT2 - Hourly forecast</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>912394b9-d98d-4c27-a8e8-830491a9831e</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data cities</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>912394b9-d98d-4c27-a8e8-830491a9831e</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>postal code</value>
         <variableId>46ebcb63-6851-4077-bc8d-3593f99baa0e</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
