import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import setupTags from "../utils/setupTags";
import slugify from "slugify";
import Seo from "../components/SEO";

export default function Tags({ data }) {
  const newTags = setupTags(data.allContentfulRecipe.nodes);

  return (
    <Layout>
      <Seo title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            return (
              <Link
                to={`/tags/${slugify(text, { lower: true })}`}
                key={index}
                className="tag"
              >
                <h5>{text}</h5>
                <p>{value} recipe(s)</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;
