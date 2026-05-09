//your JS code here. If required.
body {
    background-color: #bdc8b0; /* Light sage green background */
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px 0;
    display: flex;
    justify-content: center;
}

/* Entire content width restricted to 1100px */
.main-wrapper {
    width: 1100px;
    background-color: #bdc8b0;
}

/* Image Container Styling */
.imageContainer {
    width: 100%;
    margin-bottom: 20px;
}

.imageContainer img {
    width: 100%;
    display: block;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Table Styling */
table {
    width: 1000px; /* Leave some margin inside the 1100px wrapper */
    margin: 0 auto;
    border-collapse: collapse;
    border: 1px solid #7a8271;
    background-color: #c9d3bd; /* Slightly lighter cell background */
}

td {
    vertical-align: top;
    border: 1px solid #7a8271;
    padding: 15px;
}

/* Image scaling inside table columns */
td img {
    width: 100%;
    height: auto;
    display: block;
}

/* Text alignment and styling */
.text-center {
    text-align: center;
    line-height: 1.6;
    font-weight: bold;
}

.objective-content {
    text-align: center;
}

.objective-content h3 {
    margin-top: 0;
    text-decoration: underline;
}

.objective-content p {
    text-align: justify;
    line-height: 1.4;
    font-size: 0.95em;
}

/* Captions for the side images in Row 2 */
.caption {
    font-size: 0.85em;
    margin-top: 10px;
    line-height: 1.3;
}

.caption a {
    color: #4b0082;
    text-decoration: underline;
}