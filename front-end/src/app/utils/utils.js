export function parseUrl() {
    //debugger;
        return (window.location.href.split("?")[1] || "")
        .split("&")
        .map((x)=> x.split("="))
        .reduce((acc, [k,v]) => ({
          ...acc,
          [k]: v,
        }),
        {}
        );
      }
  