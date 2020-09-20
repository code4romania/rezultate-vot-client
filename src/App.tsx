import React, { useState } from "react";
import { ElectionScopePicker, useElectionScopePickerApi, makeElectionApi, ElectionScopeIncomplete } from "@code4ro/reusable-components";

const electionApi = makeElectionApi();

function App() {
  const [scope, setScope] = useState<ElectionScopeIncomplete>({ type: "national" });
  const apiData = useElectionScopePickerApi(electionApi, scope);
  return (
    <ElectionScopePicker value={scope} onChange={setScope} apiData={apiData} />
  );
}

export default App;
