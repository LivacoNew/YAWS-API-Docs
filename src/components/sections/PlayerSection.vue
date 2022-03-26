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
    <h1 class="text-3xl font-bold mb-2">Players</h1>
    <p class="mb-4">YAWS stores partial player data in a database for use after they disconnect. This API category allows you to modify that data.</p>

    <ContentSection title="Fetch Player Data" id="player-fetch">
        <Warning class="mb-8">This function uses Async logic! Ensure your incorporate this into your code!</Warning>

        <CodeInline>YAWS.API.GetPlayerInformation(SteamID)</CodeInline>
        <h3 class="mt-4 text-xl">Description</h3>
        <p>Fetches data about a <ContentLink href="#data-player" noRedir>Player</ContentLink> from the database, using the player's SteamID/SteamID64.</p>

        <h3 class="mt-4 text-xl">Parameters</h3>
        <ul class="list-disc list-inside">
            <li>SteamID: (String/SteamID) The SteamID of the player to get data on.</li>
        </ul>

        <h3 class="mt-4 text-xl">Returns</h3>
        <ul class="list-disc list-inside">
            <li><ContentLink href="#data-player" noRedir>Player</ContentLink> data if found.</li>
            <li><CodeInline>nil</CodeInline> if no player was found.</li>
        </ul>

        <h3 class="mt-4 text-xl">Example</h3>
        <p>Fetches data about Livaco.</p>
        <CodeBlock>
            YAWS.API.GetPlayerInformation("STEAM_0:1:80376292")
                :next(function(data)
                    if(!data) then 
                        print("Player not found.")
                        return
                    end 
                
                    print("Player found:")
                    PrintTable(data)

                    if(data.entity) then 
                        print("Player is also online!")
                    end 
                end)
                :catch(function(err)
                    print("Error: " .. err)
                end)
        </CodeBlock>
        <p>Output:</p>
        <CodeBlock>
            Player found:
            entity  =       Player [1][Livaco]
            name    =       Livaco
            steamid =       STEAM_0:1:80376292
            steamid64       =       76561198121018313
            usergroup       =       femboy
            Player is also online!
        </CodeBlock>
    </ContentSection>


    <ContentSection title="Update Player Data" id="player-update">
        <Warning class="mb-8">This function does NOT check if the player exists or not. If you don't know if they exist in the database, use YAWS.API.GetPlayerInformation to validate it before calling this.</Warning>

        <CodeInline>YAWS.API.UpdatePlayerInformation(SteamID, Value, NewData, [Optional] ServerID)</CodeInline>
        <h3 class="mt-4 text-xl">Description</h3>
        <p>Updates the <ContentLink href="#data-player" noRedir>Player</ContentLink> data in the database on the specified Player's SteamID. Useful for if your changing player data about.<br>
        <ContentHighlight>NOTE: YAWS already listens to hooks to update this information automatically!</ContentHighlight> Only use this if YAWS is not updating the information already!</p>

        <h3 class="mt-4 text-xl">Parameters</h3>
        <ul class="list-disc list-inside">
            <li>SteamID: (String/SteamID) The SteamID of the player to modify.</li>
            <li>Value: (String) The data entry to modify. MUST be either 'name' or 'usergroup' - YAWS does NOT allow modificaiton of any other entry.</li>
            <li>NewData: (String) The new data to put into the entry.</li>
            <li>ServerID: (String) Optional. The ServerID to perform this operation on, will automatically use the server executing the code otherwise.</li>
        </ul>

        <h3 class="mt-4 text-xl">Returns</h3>
        <ul class="list-disc list-inside">
            <li>True/False to indicate if it was successful or not.</li>
            <li>If false, a second parameter as an error message.</li>
        </ul>

        <h3 class="mt-4 text-xl">Example</h3>
        <p>Updates Livaco's usergroup to be "admin".</p>
        <CodeBlock>
            local success,err = YAWS.API.UpdatePlayerInformation("STEAM_0:1:80376292", "usergroup", "admin")
            if(success) then 
                print("Successfully changed.")
            else 
                print("Error: " .. err)
            end 
        </CodeBlock>
        <p>Output:</p>
        <CodeBlock>
            Successfully changed.
        </CodeBlock>
        <p>View of the new Database:</p>
        <img src="https://upload.livaco.dev/u/K7TDSgPZtp.png">
    </ContentSection>
</template>