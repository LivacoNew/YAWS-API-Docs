<script>
    import ContentSection from "../formatting/ContentSection.vue";
    import ContentHighlight from "../formatting/ContentHighlight.vue";
    import ContentLink from "../formatting/ContentLink.vue";
    import CodeBlock from "../formatting/CodeBlock.vue";
    import CodeInline from "../formatting/CodeInline.vue";
    import Warning from "../formatting/Warning.vue";

    export default {
        components: {
            ContentSection,
            ContentHighlight,
            ContentLink,
            CodeBlock,
            CodeInline,
            Warning
        }
    };
</script>

<template>
    <h1 class="text-3xl font-bold mb-2" id="section-data">Data Structures</h1>
    <p class="mb-4">YAWS's API returns the same data structure for every object, in order to avoid confusion. This section dictates how those structures are defined.</p>

    <ContentSection title="Warning" id="data-warning">
        <p>The structure for a warning is as follows:</p>
        <CodeBlock>
            {
                id                  (String/Warning ID) The warning's UUID.
                adminSteamID64      (String/SteamID64) The admin's SteamID64.
                adminSteamID        (String/SteamID) The admin's SteamID.
                playerSteamID64     (String/SteamID) The warned player's SteamID64.
                playerSteamID       (String/SteamID) The warned player's SteamID.
                reason              (String) The reason for the warning.
                points              (Number) The number of points given on the warning.
                timestamp           (Number) The unix timestamp of the warning.
                server_id           (String) The ID of the server the warning was given on.
            }
        </CodeBlock>
    </ContentSection>

    <ContentSection title="Player" id="data-player">
        <p>The structure for a player is as follows:</p>
        <CodeBlock>
            {
                entity              (Player) Optional. Will be present if the player is online, nil if they are offline.
                name                (String) The name/nickname of the player.
                steamid             (String/SteamID) The SteamID of the player.
                steamid64           (String/SteamID64) The SteamID64 of the player.
                usergroup           (String/Usergroup) The player's usergroup.
            }
        </CodeBlock>
    </ContentSection>
</template>