export async function fetchMathSectionData(section: string) {
  if (section == "undergraduate") {
    return {
      title: "Undergraduate",
      paragraph:
        "During undergrad, I discovered a deep affinity for mathematics, particularly proofs. I digested as many math textbooks as I could, and by my senior year, I was venturing into graduate-level courses with a greate interest in geometry and differential equations. My senior project delved into the oscillatory behavior of secondary-order non-homogeneous differential equations, generalizing the well-known discriminant.",
      publications: [
        {
          name: "On the Oscillations of Second Order Linear Differential Equations",
          authors: ["Eric Kehoe", "Dimitri Christodoulou"],
          university: "University of Massachusetts: Lowell",
          abstract:
            "This paper broadens the concept of the discriminant from specific to general second-order linear differential equations. Its key finding is that the discriminant’s behavior indicates whether solutions oscillate infinitely. The content is approachable for undergraduates familiar with differential equations and basic analysis.",
          href: "https://arxiv.org/abs/1611.04461",
          src: "/undergraduate-publication-image.png",
          alt: "Solution of non-homogeneous Ary type differential equation.",
        },
      ],
    };
  } else if (section == "graduate") {
    return {
      title: "Graduate School",
      paragraph:
        "In graduate school, my studies centered around mastering differential topology and geometry, complemented by a minor in computational fluid dynamics. My thesis work was an exploration into the field of metric geometry, specifically focusing on the classification of extreme points within the polytope of bounded-by-1 pseudometrics on a finite set. This study extended to characterizing the topology of the complex of ultrametrics and beginning the development of iterated cycle structures.",
      publications: [
        {
          name: "Pseudometrics, The Complex of Ultrametrics, and Iterated Cycle Structures",
          authors: ["Eric Kehoe", "David Feldman"],
          university: "University of New Hampshire",
          abstract:
            "Every finite set X carries a set M(X) of pseudometrics forming a convex cone, with faces corresponding to triangle inequalities and points expressible as conical sums of extreme rays. Intersecting this cone with a unit cube yields BM(X), the convex polytope of bounded-by-one pseudometrics. The study extends to characterizing extremeness in BM(X) and exploring the topology of ultrametrics within U(X), alongside the novel concept of iterated cycle structures (ICS) and their associated “Euler-characteristics”.",
          href: "https://scholars.unh.edu/dissertation/2451/",
          src: "/graduate-publication-image.png",
          alt: "An iterated cycle structure of length 4.",
        },
      ],
    };
  } else if (section == "postdoc") {
    return {
      title: "Postdoc in the Pattern Analysis Lab",
      paragraph:
        "During my postdoctoral research, I specialized in developing machine learning algorithms and high-performance computing with a dual focus. Firstly, I tackled analysis of high-dimensional but sample-sparse data sets, commonly encountered in transcriptomics and metabolomics data. My work encompassed predictive modeling, classification, anomaly detection, feature selection, and pathway enrichment. Secondly, I did work in hyperspectral imaging, developing techniques for compressed sensing, multi-resolution detection, and image reconstruction; leveraging custom GPU kernels.",
      publications: [
        {
          name: "Exploring Musical Structure Using Tonnetz Lattice Geometry and LSTMs",
          authors: [
            "Manuchehr Aminian",
            "Eric Kehoe",
            "Xiaofeng Ma",
            "Amy Peterson",
            "Michael Kirby",
          ],
          university: "Colorado State University, Pattern Analysis Lab",
          abstract:
            "Developed a novel chord embedding “chord2vec” built upon Euler’s Tonnetz lattice and then trained an LSTM network to learn the harmonic stylings of Bach across many of his chorales with relatively high accuracy.",
          href: "https://link.springer.com/chapter/10.1007/978-3-030-50417-5_31",
          src: "/postdoc-publication-image-0.png",
          alt: "Training losses of LSTMs across several hyperparameter combinations for predicting chords.",
        },
        {
          name: "Data Science for Mathematicians: Dimensionality Reduction Chapter",
          authors: [
            "Nathan Carter",
            "Sofya Chepushtanova",
            "Elin Farnell",
            "Eric Kehoe",
            "Michael Kirby",
            "Henry Kvinge",
          ],
          university: "Colorado State University, Pattern Analysis Lab",
          abstract:
            "Described and explicated the mathematical foundations of several dimension reduction and manifold learning algorithms used in data science today.",
          href: "https://www.taylorfrancis.com/books/edit/10.1201/9780429398292/data-science-mathematicians-nathan-carter",
          src: "/postdoc-publication-image-1.jpeg",
          alt: "Front cover of book Data Science for Mathematicians.",
        },
      ],
    };
  }
}
