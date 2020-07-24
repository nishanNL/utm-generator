<script>
  export let formOptions;

  let submitOptions = {
    title: null,
    selectedCampaign: formOptions.campaigns[0].value,
    selectedSource: formOptions.sources[0].value,
    selectedMedium: formOptions.mediums[0].value
  };

  let url;

  function generateUTMURL(e) {
    e.preventDefault();

    let utmObject = {
      utm_campaign: submitOptions.selectedCampaign,
      utm_source: submitOptions.selectedSource,
      utm_medium: submitOptions.selectedMedium
    };

    if (submitOptions.title) {
      utmObject.utm_content = encodeURIComponent(submitOptions.title);
    }

    let substr = "";
    Object.keys(utmObject).forEach((key, i) => {
      substr += `${[key]}=${utmObject[key]}&`;
    });

    substr = substr.substr(0, substr.length - 1);
    url = `${formOptions.subscriptionURL}?${substr}`;

    window.scrollTo(0, document.body.scrollHeight);
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    font-size: 2.4em;
    font-weight: 100;
  }

  label {
    margin-bottom: 0.5rem;
  }

  .form-elem {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  .utm_url {
    min-width: 300px;
    margin-top: 2rem;
  }
</style>

<main>
  <h1>NL Subscription UTM Generator</h1>
  <form>
    <div class="form-elem">
      <label for="select_source">Select Source</label>
      <select id="select_source" bind:value={submitOptions.selectedSource}>
        {#each formOptions.sources as source}
          <option value={source.value}>{source.name}</option>
        {/each}
      </select>
    </div>

    <div class="form-elem">
      <label for="title">Enter show title (Optional)</label>
      <input id="title" bind:value={submitOptions.title} />
    </div>

    <div class="form-elem">
      <label for="select_campaign">Select Campaign</label>
      <select id="select_campaign" bind:value={submitOptions.selectedCampaign}>
        {#each formOptions.campaigns as campaign}
          <option value={campaign.value}>{campaign.name}</option>
        {/each}
      </select>
    </div>

    <div class="form-elem">
      <label for="select_medium">Select Medium</label>
      <select id="select_medium" bind:value={submitOptions.selectedMedium}>
        {#each formOptions.mediums as medium}
          <option value={medium.value}>{medium.name}</option>
        {/each}
      </select>
    </div>
    <button on:click={generateUTMURL}>Submit</button>
  </form>

  {#if url}
    <div>
      <input bind:value={url} class="utm_url" />
    </div>
  {/if}

</main>
