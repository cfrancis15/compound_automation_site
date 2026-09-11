// usePageMeta - set document title and description per route

import { useEffect } from "react";

function usePageMeta(title, description) {
  useEffect(
    function updateMeta() {
      document.title = title;

      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", description);
      }
    },
    [title, description]
  );
}

export default usePageMeta;
