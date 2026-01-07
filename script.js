const projectsData = [
    {
      id: "hadoop-teradata-migration-framework",
      title: "Hadoop ↔ Teradata Migration Framework",
      summary: "Designed and implemented a reusable migration framework to move large-scale datasets between Hadoop and Teradata with validation, reconciliation, and performance optimization.",
      tools: [
        "Teradata",
        "Hadoop",
        "BTEQ",
        "SQL",
        "Spark",
        "Hive",
        "Unix Shell",
        "Parquet"
      ],
      whatIDid: [
        "Designed and built a reusable migration framework to move data between Hadoop and Teradata environments",
        "Developed BTEQ scripts to load, extract, and validate data during Hadoop-to-Teradata and Teradata-to-Hadoop migrations",
        "Converted existing ETL logic and optimized joins, filters, and partition strategies during migration",
        "Implemented incremental and full-load migration patterns based on business requirements",
        "Created robust reconciliation checks including record counts, aggregates (SUM), and hash totals between source and target systems",
        "Implemented layout and schema validation to ensure data type and column alignment across platforms",
        "Handled error scenarios and restartability using control tables and error handling logic",
        "Optimized Teradata performance using batching, commit strategies, and index considerations",
        "Validated data consistency across Text, CSV, and Parquet formats in Hadoop",
        "Collaborated with downstream reporting teams to certify migrated datasets before cutover",
        "Documented migration steps, validation results, and rollback procedures for production readiness"
      ],
      impact: [
        "Successfully delivered multiple Hadoop–Teradata migrations within planned cutover timelines",
        "Improved migration reliability through automated reconciliation and validation framework",
        "Reduced manual migration effort by standardizing BTEQ scripts and migration patterns",
        "Minimized production defects and reruns with built-in error handling and restartability",
        "Enabled scalable and repeatable migrations across multiple schemas and environments"
      ],
      links: [
        { label: "Migration Framework Design", url: "#" },
        { label: "Reconciliation & Validation Strategy", url: "#" }
      ]
    },
    {
      id: "hadoop-financial-pipeline",
      title: "Hadoop-Based Financial Data Pipeline",
      summary: "End-to-end Hadoop data pipeline for processing large-scale financial data using HDFS, Hive, Spark, and Teradata integrations.",
      tools: [
        "Hadoop",
        "HDFS",
        "Hive",
        "Spark",
        "Scala",
        "SQL",
        "Teradata",
        "Autosys",
        "Parquet",
        "Unix Shell",
        "Git"
      ],
      whatIDid: [
        "Designed and developed Hadoop-based batch data pipelines to process large-scale financial datasets",
        "Loaded data from UNIX file systems into HDFS and created Hive external tables for analytics",
        "Wrote complex HiveQL queries to transform and analyze structured, semi-structured, and unstructured data",
        "Implemented data quality validations using Shell scripts and Spark (record counts, layout checks, duplicates)",
        "Worked on Parquet file format to improve query performance and reduce storage costs",
        "Imported and exported data between Teradata and HDFS as part of data migration workflows",
        "Implemented Hive partitioning, dynamic partitions, and bucketing for optimized data access",
        "Defined and managed Hadoop job flows and monitored execution using Hadoop logs",
        "Automated workflows using Autosys to improve operational efficiency",
        "Used Spark (Scala) and Hive to process data across formats such as Text and CSV",
        "Practiced Agile development and Test-Driven Development standards",
        "Version-controlled code using Git/GitHub and automated deployments via CI/CD pipelines"
      ],
      impact: [
        "Enabled scalable processing of high-volume financial data on Hadoop ecosystem",
        "Improved query performance and storage efficiency using Parquet and partitioning strategies",
        "Reduced data issues through automated data quality and reconciliation checks",
        "Streamlined batch processing workflows with scheduling and automation",
        "Supported successful data migration between Teradata and Hadoop platforms"
      ],
      links: [
        { label: "Hadoop Architecture Notes", url: "#" },
        { label: "Data Quality Checklist", url: "#" }
      ]
    },
    {
      id: "real-time-streaming-platform",
      title: "Real-Time Streaming Data Platform",
      summary: "Designed and implemented Spark Streaming and Kafka-based real-time data processing pipelines for near-real-time analytics and monitoring.",
      tools: ["Spark Streaming", "Kafka", "Scala", "PySpark", "HDFS", "Hive", "Python"],
      whatIDid: [
        "Built scalable Spark Streaming applications (Scala) for near-real-time event processing",
        "Implemented Kafka producers/consumers for efficient data ingestion and streaming",
        "Optimized Spark parallelism, tuning, and resource management for high-throughput pipelines",
        "Integrated streaming data with batch pipelines and persisted results to data warehouses",
        "Implemented consumer lag monitoring and alerting for operational insights"
      ],
      impact: [
        "Reduced data latency from hours to minutes with real-time processing",
        "Improved system stability through monitoring and auto-scaling",
        "Enabled faster decision-making via near-real-time analytics and dashboards"
      ],
      links: [
        { label: "Architecture Overview", url: "#" },
        { label: "Performance Tuning Guide", url: "#" }
      ]
    },
    {
      id: "enterprise-data-warehouse",
      title: "Enterprise Data Warehouse & Dimensional Modeling",
      summary: "Designed and implemented star/snowflake schemas and ETL workflows supporting analytics and BI for enterprise clients.",
      tools: ["Informatica", "SSIS", "Teradata", "Oracle", "SSRS", "SQL"],
      whatIDid: [
        "Designed dimensional models (star/snowflake schemas) for enterprise data warehouses",
        "Built ETL pipelines using Informatica and SSIS for data ingestion and transformation",
        "Implemented SCD Type 2 for tracking dimensional changes and historical data",
        "Developed SSRS reports and dashboards for KPI tracking and business analytics",
        "Optimized warehouse performance through indexing, partitioning, and query tuning"
      ],
      impact: [
        "Reduced report generation time and improved reporting accuracy",
        "Enabled 360-degree business view with integrated data and historical tracking",
        "Supported faster analytics and decision-making across the organization"
      ],
      links: [
        { label: "Schema Design Patterns", url: "#" },
        { label: "ETL Best Practices", url: "#" }
      ]
    },
    {
      id: "data-quality-governance",
      title: "Data Quality & Governance Framework",
      summary: "Implemented end-to-end data quality, validation, and governance controls to ensure accuracy and compliance across pipelines.",
      tools: ["Collibra", "Monte Carlo", "Jira", "Python", "SQL", "Spark"],
      whatIDid: [
        "Designed data quality frameworks and validation rules for critical datasets",
        "Implemented automated data profiling, validation, and anomaly detection",
        "Built monitoring and alerting for data quality metrics and SLA adherence",
        "Documented data lineage, metadata, and governance policies",
        "Created test plans and QA processes for ETL and analytics projects"
      ],
      impact: [
        "Reduced data quality issues and production defects by 30%+",
        "Improved data governance compliance and audit readiness",
        "Increased stakeholder confidence in analytics and reports"
      ],
      links: [
        { label: "Data Quality Checklist", url: "#" },
        { label: "Governance Framework", url: "#" }
      ]
    },
    {
      id: "nifi-etl-orchestration",
      title: "Apache NiFi & ETL Pipeline Orchestration",
      summary: "Designed and maintained NiFi flows to orchestrate data ingestion, transformation, and distribution across Hadoop, databases, and NoSQL stores.",
      tools: ["Apache NiFi", "Kafka", "HDFS", "HBase", "Mainframes", "Sqoop", "Python"],
      whatIDid: [
        "Designed NiFi flows to ingest data from Mainframes, databases, and APIs",
        "Integrated NiFi with Kafka, HDFS, HBase, and MongoDB for multi-source data pipelines",
        "Implemented data transformation and enrichment logic within NiFi processors",
        "Automated error handling, retry logic, and data quality checks in flows",
        "Monitored and tuned NiFi performance for high-throughput scenarios"
      ],
      impact: [
        "Reduced manual data integration effort through visual, no-code workflows",
        "Improved data availability and reliability via automated ingestion and error handling",
        "Enabled faster onboarding of new data sources and integration scenarios"
      ],
      links: [
        { label: "NiFi Architecture", url: "#" },
        { label: "Processor Patterns", url: "#" }
      ]
    },
    {
      id: "ci-cd-infrastructure-automation",
      title: "CI/CD & Infrastructure Automation",
      summary: "Implemented CI/CD pipelines and infrastructure-as-code solutions using Jenkins, Git, Terraform, Kubernetes, and Docker for reliable deployments and cluster management.",
      tools: ["Jenkins", "Git", "Bitbucket", "Terraform", "Kubernetes", "Docker", "Helm", "Python", "Bash"],
      whatIDid: [
        "Designed and maintained Jenkins pipelines for automated builds, testing, and deployments",
        "Implemented Infrastructure-as-Code (IaC) using Terraform to provision cloud resources and manage infrastructure state",
        "Containerized applications and data processing jobs using Docker and deployed on Kubernetes clusters",
        "Configured Kubernetes manifests and Helm charts for scalable, reproducible deployments",
        "Automated Hadoop and Spark cluster startup/shutdown scripts using Python and Shell",
        "Integrated version control (Git/Bitbucket) with CI/CD workflows for continuous integration",
        "Implemented deployment strategies including blue-green deployments and canary releases",
        "Monitored pipeline health, failure rates, and deployment success metrics"
      ],
      impact: [
        "Reduced deployment time by 70% through automated CI/CD workflows",
        "Improved infrastructure reliability and consistency via Infrastructure-as-Code",
        "Enabled rapid scaling and orchestration of containerized workloads on Kubernetes",
        "Minimized manual errors and operational overhead through automation"
      ],
      links: [
        { label: "Jenkins Pipeline Best Practices", url: "#" },
        { label: "Terraform Modules Library", url: "#" }
      ]
    },
    {
      id: "data-warehouse-reporting",
      title: "Data Warehouse Design & Reporting",
      summary: "Designed and implemented dimensional data models, ETL workflows, and BI reporting solutions to deliver enterprise analytics and business intelligence.",
      tools: ["Informatica", "SSIS", "SSRS", "Oracle", "SQL", "Performance Point Server", "Collibra", "Azure DevOps"],
      whatIDid: [
        "Designed star and snowflake schemas optimized for OLAP and analytical queries",
        "Built and maintained ETL workflows using Informatica and SSIS for data integration",
        "Implemented SCD Type 2 for tracking dimensional changes and maintaining historical accuracy",
        "Developed SSRS reports and Performance Point dashboards for executive dashboards and KPI tracking",
        "Implemented data quality checks, validations, and metadata management for data governance",
        "Managed data warehouse operations including backups, maintenance, and performance tuning",
        "Collaborated with business analysts to translate requirements into dimensional models and reports",
        "Automated report delivery and data refreshes through scheduling and orchestration"
      ],
      impact: [
        "Reduced report generation time by 40% through optimized dimensional models and queries",
        "Improved data accuracy and governance compliance through metadata management and data quality controls",
        "Enabled faster business decision-making with real-time dashboards and self-service BI",
        "Streamlined ETL operations and reduced manual effort through automation"
      ],
      links: [
        { label: "Dimensional Modeling Guide", url: "#" },
        { label: "SSRS Dashboard Patterns", url: "#" }
      ]
    },
    {
      id: "monitoring-observability",
      title: "Monitoring, Alerting & Observability",
      summary: "Implemented comprehensive monitoring, alerting, and observability solutions for data pipelines, streaming systems, and infrastructure to ensure reliability and performance.",
      tools: ["Kafka Consumer Lag Monitoring", "Prometheus", "Grafana", "ELK Stack", "New Relic", "Datadog", "Python", "SQL"],
      whatIDid: [
        "Implemented Kafka consumer lag monitoring to track streaming pipeline health and SLA adherence",
        "Built custom dashboards to visualize Spark job metrics, cluster resource utilization, and pipeline performance",
        "Configured alerting rules and notifications for anomalies, failures, and performance degradation",
        "Implemented centralized log ingestion and analysis using ELK Stack (Elasticsearch, Logstash, Kibana)",
        "Created monitoring scripts and probes for data quality, latency, and availability metrics",
        "Integrated monitoring with incident management tools for automated alerting and escalation",
        "Built custom Python scripts for metrics collection and anomaly detection",
        "Collaborated with operations teams to define SLAs, alerting thresholds, and runbooks"
      ],
      impact: [
        "Reduced Mean Time to Detection (MTTD) by 60% through proactive monitoring",
        "Improved pipeline reliability and uptime through early anomaly detection",
        "Enabled faster incident response and resolution via comprehensive observability",
        "Reduced unplanned downtime and improved customer satisfaction"
      ],
      links: [
        { label: "Alerting Strategy Guide", url: "#" },
        { label: "Monitoring Architecture", url: "#" }
      ]
    }
  ];
  
  const experienceData = [
    {
      company: "Bank of America",
      location: "Charlotte, NC",
      role: "Senior Data Engineer",
      dates: "Nov 2024 – Present",
      summary: "Designed, developed, and optimized Hadoop-based batch pipelines; loaded and transformed data using HDFS/Hive/Spark; implemented data quality, reconciliation, and automated workflows; and supported Teradata–HDFS migrations and CI/CD deployments.",
      responsibilities: [
        "Designed, developed, and optimized Hadoop-based batch data pipelines for large-scale financial datasets",
        "Loaded data from UNIX file systems into HDFS and created Hive external tables for analytics",
        "Wrote complex HiveQL queries to analyze structured, semi-structured, and unstructured data",
        "Implemented Spark (Scala) jobs for data processing and validation across Text and CSV formats",
        "Developed Shell scripts to perform data quality validations such as record count checks, duplicate detection, and file consistency",
        "Worked extensively with Parquet file format to improve storage efficiency and query performance",
        "Implemented Hive partitioning, dynamic partitions, and bucketing strategies for optimized data access",
        "Imported and exported data between Teradata and HDFS as part of migration workflows",
        "Implemented reconciliation controls to validate source vs target counts, layouts, and data uniqueness",
        "Defined and managed Hadoop job flows and monitored executions using Hadoop log files",
        "Automated workflows using Autosys to improve pipeline reliability and operational efficiency",
        "Practiced Agile methodologies and Test-Driven Development standards",
        "Automated deployments using CI/CD pipelines with Bitbucket and Git",
        "Collaborated with cross-functional teams to resolve data issues and support production releases"
      ],
      tools: [
        "Hadoop",
        "HDFS",
        "Hive",
        "Spark 3.x",
        "Scala",
        "SQL",
        "Teradata",
        "Parquet",
        "Autosys",
        "Unix/Linux",
        "Git",
        "Bitbucket",
        "Impala",
        "HBase",
        "Python"
      ],
      impact: [
        "Enabled scalable processing of high-volume financial data on Hadoop, reducing analysis time and supporting larger datasets.",
        "Improved query performance and lowered storage costs using Parquet and partitioning strategies.",
        "Reduced data issues and re-runs through automated validation and reconciliation checks.",
        "Streamlined operations and increased job reliability via Autosys automation and CI/CD deployments."
      ]
    },
    {
      company: "AT&T",
      role: "Data Engineer",
      dates: "May 2024 – Nov 2024",
      summary: "Built real-time streaming and Spark-based analytics, migrated MapReduce jobs to Spark, and implemented robust ETL and monitoring for large-scale data pipelines.",
      responsibilities: [
        "Developed real-time streaming solutions using Spark Streaming and Kafka; tuned Spark for parallelism and performance",
        "Migrated MapReduce jobs to Spark (Spark SQL / DataFrame API) and optimized YARN/Hive integrations",
        "Built ETL and data ingestion pipelines (Sqoop, Flume, custom Scala/PySpark scripts) and exported results to Teradata, Cassandra, and Solr",
        "Implemented Teradata utilities (BTEQ, FastLoad, MultiLoad, FastExport) and designed performant Teradata data models",
        "Worked with multiple file formats (ORC, Parquet, Avro) and compression codecs; migrated HQL to PySpark and Impala for faster queries",
        "Instrumented monitoring (Kafka consumer lag, Spark job metrics), handled log ingestion, and automated infrastructure with Terraform and cloud services"
      ],
      tools: [
        "Hadoop",
        "Hive",
        "MapReduce",
        "Spark",
        "Spark Streaming",
        "Kafka",
        "Sqoop",
        "Teradata",
        "Cassandra",
        "Solr",
        "Flume",
        "Impala",
        "PySpark",
        "Scala",
        "Python",
        "AWS",
        "Azure",
        "GCP"
      ],
      impact: [
        "Improved streaming throughput and reduced latency through Spark and Kafka optimizations",
        "Reduced batch processing time by migrating workloads to Spark and tuning query paths",
        "Delivered reliable ETL pipelines that increased data availability for BI and reporting",
        "Enhanced platform stability with monitoring, automation, and infrastructure-as-code"
      ]
    },
    {
      company: "Tata Consultancy Services",
      location: "Hyderabad, India (Bank of America client)",
      role: "Software Developer",
      dates: "Sep 2017 – Jan 2022",
      summary: "Built and maintained ETL/ELT and streaming solutions; automated cluster operations; developed NiFi, Spark, and Kafka pipelines to support analytics and reporting for a US-based client.",
      responsibilities: [
        "Developed Python startup/shutdown scripts for Hadoop and Spark components and managed cluster operations",
        "Implemented iterative Spark Streaming jobs (Scala) for near-real-time processing and migrated MapReduce jobs to Spark",
        "Designed and maintained Apache NiFi flows to integrate Mainframes, HBase, and MongoDB sources",
        "Used Sqoop to import/export data from Teradata/DB2 and implemented ETL workflows on YARN",
        "Configured Zookeeper for coordinated Hive access and implemented SCD Type 2 auditing",
        "Optimized Hive using partitioning, bucketing, and distributed cache, reducing processing costs (~20%)",
        "Ingested logs and events via Kafka, built Python publisher APIs, and used Avro/Parquet formats with compression",
        "Automated builds and deployments with Jenkins and used Terraform/Kubernetes for infrastructure automation"
      ],
      tools: [
        "Apache NiFi",
        "HDFS",
        "Kafka",
        "Mainframes",
        "Hadoop",
        "YARN",
        "Python",
        "HBase",
        "Hive",
        "Jenkins",
        "Sqoop",
        "Pig",
        "MapReduce",
        "Scala",
        "Zookeeper",
        "GitHub",
        "Spark",
        "Linux",
        "Teradata",
        "Kubernetes",
        "Terraform",
        "Avro",
        "Parquet",
        "Solr",
        "Cassandra",
        "Docker"
      ],
      impact: [
        "Reduced processing costs and improved query performance through Hive optimizations and partitioning",
        "Improved data availability and timeliness via real-time streaming and automated ETL workflows",
        "Increased operational reliability by automating cluster management and CI/CD processes"
      ]
    },
    {
      company: "Tata Consultancy Services",
      location: "Hyderabad, India (BSNL client)",
      role: "Software Developer",
      dates: "Mar 2016 – Aug 2017",
      summary: "Designed and implemented dimensional data models and ETL pipelines; developed reporting and automated workflows to support analytics and BI for the BSNL client.",
      responsibilities: [
        "Designed star and snowflake schemas and implemented dimensional models for the enterprise data warehouse",
        "Built and maintained ETL workflows using Informatica and SSIS to ingest, transform, and load data from databases, flat files, and APIs",
        "Implemented data quality checks, validations, and metadata management to ensure data accuracy and lineage",
        "Developed SSRS reports and dashboards to deliver business insights and KPIs",
        "Managed data warehouse operations, monitoring, backups, performance tuning, and routine maintenance",
        "Automated deployments and managed containerized applications with Kubernetes and Helm for related services"
      ],
      tools: [
        "Informatica",
        "SSRS",
        "SSIS",
        "Oracle 10g",
        "Unix",
        "Linux",
        "Visual Studio",
        "Performance Point Server",
        "MS Office",
        "SharePoint",
        "Kubernetes",
        "Docker"
      ],
      impact: [
        "Improved reporting turnaround and data reliability through robust ETL and data-quality processes",
        "Reduced manual effort and errors by automating ETL workflows and deployments",
        "Delivered timely dashboards and KPIs that supported operational and business decisions"
      ]
    },
    {
      company: "Conquer Technologies Inc",
      role: "Software Quality Assurance Engineer",
      dates: "Dec 2014 – Mar 2016",
      summary: "Led QA and data-quality initiatives for analytics projects, building test plans, controls, and reporting to ensure data accuracy and reliability.",
      responsibilities: [
        "Designed and executed QA and data-quality strategies across projects",
        "Converted project specifications into test plans and managed QA execution end-to-end",
        "Implemented QA controls, data reporting, and data-quality foundations",
        "Collaborated with data teams to validate datasets and pipeline outputs",
        "Managed work tracking and governance using Jira, DevOps, Confluence, and Asana"
      ],
      tools: ["Collibra", "Monte Carlo", "Jira", "Azure DevOps", "Confluence", "Asana"],
      impact: [
        "Improved data accuracy and reduced defects by standardizing QA and data-quality checks",
        "Accelerated issue resolution and reporting through integrated tooling and processes",
        "Enhanced cross-team visibility and governance for data initiatives"
      ]
    }
  ];

  function renderExperience(){
    const el = document.getElementById('experienceList');
    if(!el) return;
    el.innerHTML = experienceData.map(e => {
      return `
      <div class="card experience-card" data-company="${e.company}">
        <h3 style="margin-top:0;">${e.company}</h3>
        <p class="experience-meta"><strong>${e.role}</strong>${e.location ? ' • ' + e.location : ''} • ${e.dates}</p>
        ${e.summary ? `<p class="muted" style="margin-top:8px;"><strong>What I did:</strong> ${e.summary}</p>` : ''}
        <p class="muted" style="margin-top:8px;">Click to view details →</p>
      </div>
      `;
    }).join("");

    // Attach click handlers to open full experience in detail modal
    Array.from(document.querySelectorAll('.experience-card')).forEach((card, idx) => {
      card.onclick = () => openExperienceDetail(experienceData[idx]);
    });
  }

  function openExperienceDetail(e){
    dTitle.textContent = e.company + (e.role ? ' — ' + e.role : '');
    dSummary.textContent = e.summary || '';

    dTools.innerHTML = (e.tools || []).map(t => `<span class="${pillClass(t.replace(/\s*3\.x$/,'').replace(/\//g,'-'))}">${t}</span>`).join('');

    dBullets.innerHTML = (e.responsibilities || []).map(r => `<li>${r}</li>`).join('');
    dImpact.innerHTML = (e.impact || []).map(i => `<li>${i}</li>`).join('');
    dLinks.innerHTML = '';

    detailEl.classList.remove('hidden');
    detailEl.scrollIntoView({behavior:'smooth', block:'start'});
  }
  
  const projectsEl = document.getElementById("projects");
  const detailEl = document.getElementById("detail");
  const closeDetail = document.getElementById("closeDetail");
  
  const dTitle = document.getElementById("dTitle");
  const dSummary = document.getElementById("dSummary");
  const dTools = document.getElementById("dTools");
  const dBullets = document.getElementById("dBullets");
  const dImpact = document.getElementById("dImpact");
  const dLinks = document.getElementById("dLinks");
  
  function pillClass(tool){
    if (["Kafka","AWS","Spring Boot","Hadoop","Teradata"].includes(tool)) return "pill accent";
    if (["Spark","Airflow","Hive"].includes(tool)) return "pill green";
    return "pill";
  }
  
  function renderProjects(list){
    projectsEl.innerHTML = "";
    list.forEach(p => {
      const div = document.createElement("div");
      div.className = "card project";
      div.innerHTML = `
        <h3>${p.title}</h3>
        <p class="muted">${p.summary}</p>
        <div class="pill-row">
          ${p.tools.map(t => `<span class="${pillClass(t)}">${t}</span>`).join("")}
        </div>
        <p class="muted" style="margin-top:10px;">Click to view details →</p>
      `;
      div.onclick = () => openDetail(p);
      projectsEl.appendChild(div);
    });
  }
  
  function openDetail(p){
    dTitle.textContent = p.title;
    dSummary.textContent = p.summary;
  
    dTools.innerHTML = p.tools.map(t => `<span class="${pillClass(t)}">${t}</span>`).join("");
  
    dBullets.innerHTML = p.whatIDid.map(x => `<li>${x}</li>`).join("");
    dImpact.innerHTML = p.impact.map(x => `<li>${x}</li>`).join("");
  
    dLinks.innerHTML = p.links.map(l => `<a class="btn btn-outline" href="${l.url}" target="_blank" rel="noreferrer">${l.label}</a>`).join("");
    detailEl.classList.remove("hidden");
    detailEl.scrollIntoView({behavior:"smooth", block:"start"});
  }
  
  closeDetail.onclick = () => detailEl.classList.add("hidden");
  
  // Filters
  const searchEl = document.getElementById("search");
  const toolFilterEl = document.getElementById("toolFilter");
  
  // Populate tool filter dynamically from projectsData + persisted custom tools
  (function populateToolFilter(){
    const saved = JSON.parse(localStorage.getItem('customTools') || '[]');
    const toolsSet = new Set(projectsData.flatMap(p => p.tools));
    saved.forEach(t => toolsSet.add(t));
    const uniqueTools = Array.from(toolsSet).sort();

    // reset select and add default option
    toolFilterEl.innerHTML = '<option value="">All tools</option>';
    uniqueTools.forEach(t => {
      const opt = document.createElement("option");
      opt.value = t;
      opt.textContent = t;
      toolFilterEl.appendChild(opt);
    });
  })();

  function applyFilters(){
    const q = (searchEl.value || "").toLowerCase().trim();
    const tool = toolFilterEl.value;
  
    const filtered = projectsData.filter(p => {
      const hay = (p.title + " " + p.summary + " " + p.tools.join(" ")).toLowerCase();
      const matchesQ = !q || hay.includes(q);
      const matchesTool = !tool || p.tools.includes(tool);
      return matchesQ && matchesTool;
    });
  
    renderProjects(filtered);
  }
  
  searchEl.addEventListener("input", applyFilters);
  toolFilterEl.addEventListener("change", applyFilters);
  
  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
  
  // Initial
  renderProjects(projectsData);
  renderExperience();
  
  /* =========================
     Tech Trends: Hacker News
  ========================= */
  async function loadHNNews() {
    const newsList = document.getElementById("newsList");
    if(!newsList) return;
    newsList.innerHTML = `<div class="card"><p class="muted">Loading tech headlines...</p></div>`;

    try {
      // "front_page" gives top HN items via Algolia
      const url = "https://hn.algolia.com/api/v1/search?tags=front_page";
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      const items = (data.hits || []).slice(0, 9).map(hit => {
        const title = hit.title || "Untitled";
        const link = hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`;
        const points = hit.points ?? 0;
        const author = hit.author || "unknown";

        return `
          <div class="card">
            <h3 style="margin-top:0;">
              <a href="${link}" target="_blank" rel="noreferrer">${title}</a>
            </h3>
            <p class="muted">▲ ${points} • by ${author}</p>
          </div>
        `;
      }).join("");

      newsList.innerHTML = items || `<div class="card"><p class="muted">No news found.</p></div>`;
    } catch (e) {
      newsList.innerHTML = `<div class="card"><p class="muted">Couldn’t load news. (${e.message})</p></div>`;
    }
  }

  // call once on page load and then every minute (60,000 ms)
  loadHNNews();
  setInterval(loadHNNews, 60000);
  