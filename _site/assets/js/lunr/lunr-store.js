var store = [{
        "title": "Text Processing",
        "excerpt":"import pandas as pdimport numpy as npimport matplotlib.pyplot as pltimport seaborn as snsimport reimport nltkfrom sklearn.feature_extraction.text import TfidfVectorizerfrom nltk.corpus import stopwords, wordsfrom nltk.tokenize import RegexpTokenizerfrom nltk.stem import WordNetLemmatizerfrom nltk.stem.porter import PorterStemmerdef freq(var, bins=None): if bins != None and var.dtype != 'object': df = pd.concat([ var.value_counts(bins=bins), var.value_counts(bins=bins, normalize=True).map(lambda x: '{:.1%}'.format(x)) ],...","categories": [],
        "tags": ["feature engineering","data science","text processing"],
        "url": "http://localhost:4000/textproc/",
        "teaser":null}]
