import React from "react";
import markdownStyles from "./markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";
import { PostQuery } from "../lib/api";

interface Props {
  content?: PostQuery["body"];
}

export default function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <BlockContent
        blocks={content}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        className={markdownStyles.markdown}
      />
    </div>
  );
}