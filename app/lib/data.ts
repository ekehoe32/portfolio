export async function fetchMathSectionData(section: string) {
  if (section == "undergraduate") {
    return {
      title: "Undergraduate",
      paragraph:
        "During undergrad, at the University of Massachusetts: Lowell, I discovered a love for mathematics, particularly for proving relationships between things. My focus was in linear algebra, calculus, and differential equations. Later on I developed a great interest in differential geometry. My senior capstone delved into the oscillatory behavior of secondary-order non-homogeneous differential equations, generalizing the well-known discriminant.",
      publications: [
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
      ],
    };
  } else if (section == "graduate") {
    return {
      title: "Graduate School",
      paragraph:
        "In graduate school, at the University of New Hampshire, my focus centered around differential topology and geometry with a minor in computational fluid dynamics. My thesis work was an exploration into the field of metric geometry, specifically focusing on the classification of extreme points within the polytope of bounded-by-1 pseudometrics on a finite set. This study extended to characterizing the topology of the complex of ultrametrics and beginning the development of iterated cycle structures.",
      publications: [
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
      ],
    };
  } else if (section == "postdoc") {
    return {
      title: "Postdoc in the Pattern Analysis Lab",
      paragraph:
        "For my postdoctoral research, I worked in Michael Kirby's Pattern Analysis Lab at Colorado State University. I developed machine learning algorithms and wrote high-performance distributed software libraries for executing algorithms on large datasets. Many of my projects involved the analysis of high-dimensional but sample-sparse data sets, such as transcriptomics and metabolomics data. My work encompassed predictive modeling, classification, anomaly detection, feature selection, and pathway enrichment. Additionally, I did work in hyperspectral imaging, developing techniques for compressed sensing, multi-resolution detection, and image reconstruction; leveraging custom GPU kernels.",
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
            "For each fundamental and widely used ordinary second-order linear homogeneous differential equation of mathematical physics, we derive a family of associated differential equations that share the same “degenerate” canonical form. These equations can be solved easily if the original equation is known to possess analytic solutions, otherwise their properties and the properties of their solutions are de facto known as they are comparable to those already deduced for the fundamental equation.",
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
            "In this paper, we introduce two algorithms to estimate chemical concentrations from compressed hyperspectral image (HSI) measurements. The first algorithm employs matched filtering and ℓ1 regularization for direct concentration image extraction from compressed data. The second algorithm uses a fixed-resolution subspace in the 2D Haar wavelet domain for image reconstruction at a macro-pixel resolution. Applied to synthetic and real long-wave infrared HSI data sets, our methods demonstrate comparable detection performance to traditional methods but with reduced memory and computational demands, maintaining effectiveness even at lower resolutions.",
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
            "We developed an environmentally hardened compressive sensing hyperspectral imager (CS-HSI) for early warning of chemical vapor plumes in the long-wave infrared spectrum. This cost-effective, single-pixel system uses a digital micromirror device and a Fabry-Perot tunable filter for spatial encoding and spectral resolution of compressed data. The CS processing module reconstructs spatially compressed spectral data, while an automated target recognition algorithm detects chemical plumes against dynamic backgrounds. Additionally, the system can generate detection products directly in compressed space, enhancing efficiency and enabling effective search and confirm operational modes.",
          href: "https://spie.org/Publications/Proceedings/Paper/10.1117/12.2605288?SSO=1",
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
            "This paper introduces a pathway expression framework as an approach for constructing derived biomarkers. The pathway expression framework incorporates the biological connections of genes leading to a biologically relevant model. Using this framework, we distinguish between shedding subjects post-infection and all subjects pre-infection in human blood transcriptomic samples challenged with various respiratory viruses: H1N1, H3N2, HRV (Human Rhinoviruses), and RSV (Respiratory Syncytial Virus).",
          href: "https://www.nature.com/articles/s41598-022-26381-x",
          src: "/math/postdoc-publication-image-4.png",
          alt: "Pathway expression classification heatmap.",
        },
      ],
    };
  }
}
