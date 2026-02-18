import { importShared } from './__federation_fn_import-5xHEoA8C.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';

const {useState} = await importShared('react');

function Remote() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Remote" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Count: ",
      count
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCount(count + 1), children: "Increment" })
  ] });
}

export { Remote as default };
