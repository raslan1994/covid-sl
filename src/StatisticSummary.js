import { Component } from "react";

export default function StatisticsSummary(props) {
  return (
    <div class="container px-4 py-5" id="featured-3">
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            {/* <svg class="bi" width="1em" height="1em">
              <use xlink:href="#collection"></use>
            </svg> */}
          </div>
          <h2>Featured title</h2>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" class="icon-link">
            Call to action
            {/* <svg class="bi" width="1em" height="1em">
              <use xlink:href="#chevron-right"></use>
            </svg> */}
          </a>
        </div>
        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            {/* <svg class="bi" width="1em" height="1em">
              <use xlink:href="#people-circle"></use>
            </svg> */}
          </div>
          <h2>Featured title</h2>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" class="icon-link">
            Call to action
            {/* <svg class="bi" width="1em" height="1em">
              <use xlink:href="#chevron-right"></use>
            </svg> */}
          </a>
        </div>
        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            {/* <svg class="bi" width="1em" height="1em">
              <use xlink:href="#toggles2"></use>
            </svg> */}
          </div>
          <h2>Featured title</h2>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" class="icon-link">
            Call to action
            {/* <svg class="bi" width="1em" height="1em">
              <use xlink:href="#chevron-right"></use>
            </svg> */}
          </a>
        </div>
      </div>
    </div>
  );
}
