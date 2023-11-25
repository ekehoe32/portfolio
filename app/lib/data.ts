export async function fetchEducationSectionDetails(section: string) {
  if (section == "undergraduate") {
    return {
      title: "Undergraduate",
      paragraph:
        "At the University of Massachusetts: Lowell, I developed a passion for mathematics, especially for the art of proofs, focusing on linear algebra, calculus, and differential equations. My interest evolved towards differential geometry, culminating in a senior capstone that explored oscillatory behaviors in secondary-order non-homogeneous differential equations, extending the concept of the discriminant.",
    };
  } else if (section == "graduate") {
    return {
      title: "Graduate School",
      paragraph:
        "At the University of New Hampshire, my graduate studies in differential topology and geometry, along with a minor in computational fluid dynamics, led to a thesis focused on metric geometry. I concentrated on classifying extreme points in bounded-by-1 pseudometrics polytopes on finite sets, characterizing ultrametric complexes, and initiating iterated cycle structures development.",
    };
  } else if (section == "postdoc") {
    return {
      title: "Postdoc at the Pattern Analysis Lab",
      paragraph:
        "During my postdoc at Colorado State University in Michael Kirby's Pattern Analysis Lab, I focused on developing machine learning algorithms and high-performance distributed computing for large data sets, particularly in transcriptomics and metabolomics. My work involved predictive modeling, classification, anomaly detection, and hyperspectral imaging techniques, including compressed sensing and image reconstruction, with an emphasis on GPU computing.",
    };
  }
}

export async function fetchPublicationDetails(section: string) {
  if (section == "undergraduate") {
    return [
      {
        name: "On the Oscillations of Second Order Linear Differential Equations",
        authors: ["Eric Kehoe", "Dimitri Christodoulou"],
        university: "University of Massachusetts: Lowell",
        abstract:
          "This paper broadens the concept of the discriminant from specific to general second-order linear differential equations. Its key finding is that the discriminant’s behavior indicates whether solutions oscillate infinitely. The content is approachable for undergraduates familiar with differential equations and basic analysis.",
        href: "https://arxiv.org/abs/1611.04461",
        src: "/math/undergraduate-publication-image.png",
        alt: "Solution of non-homogeneous Ary type differential equation.",
      },
    ];
  } else if (section == "graduate") {
    return [
      {
        name: "Pseudometrics, The Complex of Ultrametrics, and Iterated Cycle Structures",
        authors: ["Eric Kehoe", "David Feldman"],
        university: "University of New Hampshire",
        abstract:
          "Every finite set X carries a set M(X) of pseudometrics forming a convex cone, with faces corresponding to triangle inequalities and points expressible as conical sums of extreme rays. Intersecting this cone with a unit cube yields BM(X), the convex polytope of bounded-by-one pseudometrics. The study extends to characterizing extremeness in BM(X) and exploring the topology of ultrametrics within U(X), alongside the novel concept of iterated cycle structures (ICS) and their associated “Euler-characteristics”.",
        href: "https://scholars.unh.edu/dissertation/2451/",
        src: "/math/graduate-publication-image.png",
        alt: "An iterated cycle structure of length 4.",
      },
    ];
  } else if (section == "postdoc") {
    return [
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
        src: "/math/postdoc-publication-image-0.png",
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
        src: "/math/postdoc-publication-image-1.png",
        alt: "Front cover of book Data Science for Mathematicians.",
      },
      {
        name: "Degenerate Canonical Forms of Ordinary Second-Order Linear Homogeneous Differential Equations",
        authors: [
          "Dimitris M. Christodoulou",
          "Eric Kehoe",
          "Qutaibeh D. Katatbeh",
        ],
        university: "University of Massachusetts: Lowell",
        abstract:
          "We derived a family of differential equations related to commonly used second-order linear equations in mathematical physics, all sharing a “degenerate” canonical form. These equations are easily solvable based on the original’s known solutions, with properties comparable to the fundamental equation.",
        href: "https://www.mdpi.com/2075-1680/10/2/94",
        src: "/math/postdoc-publication-image-2.png",
        alt: "Canoical forms of ODEs.",
      },
      {
        name: "Biomarker selection and a prospective metabolite-based machine learning diagnostic for lyme disease",
        authors: [
          "Eric R. Kehoe",
          "Bryna L. Fitzgerald",
          "Barbara Graham",
          "M. Nurul Islam",
          "Kartikay Sharma",
          "Gary P. Wormser",
          "John T. Belisle",
          "Michael J. Kirby",
        ],
        university: "University of Colorado, Pattern Analysis Lab",
        abstract:
          "Developed a metabolite-based machine learning diagnostic for Lyme disease. The diagnostic reports high accuracies on a sequestered batch of human test samples. The prediction model is shown to be invariant of the batch effects due to the iterative feature removal process.",
        href: "https://www.nature.com/articles/s41598-022-05451-0",
        src: "/math/postdoc-publication-image-3.png",
        alt: "SSVM classifer on test data.",
      },
      {
        name: "Estimating chemical concentrations from compressed hyperspectral images",
        authors: [
          "Eric R. Kehoe",
          "Michael Kirby",
          "Chris Peterson",
          "Louis Scharf",
          "Julia R. Dupuis",
          "John P. Dixon",
          "Martin R. Anguita",
          "Stephanie M. Craig",
        ],
        university: "University of Colorado, Pattern Analysis Lab",
        abstract:
          "Introduced two algorithms for estimating chemical concentrations from compressed hyperspectral images, demonstrating efficiency and comparable performance to traditional methods on various infrared data sets.",
        href: "https://spie.org/Publications/Proceedings/Paper/10.1117/12.2605288?SSO=1",
        src: "/math/postdoc-publication-image-3.png",
        alt: "SSVM classifer on test data.",
      },
      {
        name: "Compressive Sensing Hyperspectral Imager in the LWIR for Chemical Plume Detection",
        authors: [
          "Stephanie M. Craig",
          "Julia R. Dupuis",
          "John P. Dixon",
          "Martín Anguita",
          "David Mansur",
          "S. Chase Buchanan",
          "Eric R. Kehoe",
          "Chris Peterson",
          "Louis Scharf",
          "Michael M. Kirby",
        ],
        university: "University of Colorado, Pattern Analysis Lab",
        abstract:
          "We developed a single-pixel hyperspectral imager using a digital micromirror and Fabry-Perot filter for early chemical vapor detection. It processes and reconstructs data efficiently, detecting chemical plumes and operating effectively in compressed space.",
        href: "https://spie.org/Publications/Proceedings/Paper/10.1117/12.2618932",
        src: "/math/postdoc-publication-image-3.png",
        alt: "SSVM classifer on test data.",
      },
      {
        name: "Pathway expression analysis",
        authors: [
          "Nathan Mankovich",
          "Eric Kehoe",
          "Amy Peterson",
          "Michael Kirby",
        ],
        university: "University of Colorado, Pattern Analysis Lab",
        abstract:
          "This paper presents a pathway expression framework for creating derived biomarkers, integrating biological gene connections for a relevant model. The framework effectively differentiates between post-infection shedding subjects and pre-infection subjects in blood samples challenged with various respiratory viruses, including H1N1, H3N2, HRV, and RSV.",
        href: "https://www.nature.com/articles/s41598-022-26381-x",
        src: "/math/postdoc-publication-image-4.png",
        alt: "Pathway expression classification heatmap.",
      },
    ];
  }
}
